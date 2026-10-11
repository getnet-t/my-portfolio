export const codeSnippets = [
  {
    id: "transaction",
    filename: "saleTransaction.controller.js",
    language: "javascript",
    badge: "ACID Transaction & Inventory Flow",
    description: "Atomic checkout handling stock deduction, cash ledger, and rollback on failure.",
    code: `// Process sale with ACID rollback guarantee
export const processSale = async (req, res) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();

    const { customerId, items, paymentMethod, paidAmount } = req.body;
    
    // 1. Calculate totals & verify stock availability
    for (const item of items) {
      const [product] = await connection.query(
        'SELECT stock_quantity, unit_price FROM products WHERE id = ? FOR UPDATE',
        [item.productId]
      );
      if (product[0].stock_quantity < item.quantity) {
        throw new Error(\`Insufficient stock for item \${item.productId}\`);
      }
    }

    // 2. Insert master sale record
    const [saleResult] = await connection.query(
      'INSERT INTO sales (customer_id, total_amount, payment_status) VALUES (?, ?, ?)',
      [customerId, totalAmount, paidAmount >= totalAmount ? 'PAID' : 'PARTIAL']
    );

    // 3. Atomically decrement inventory & log ledger
    await connection.query(
      'UPDATE products SET stock_quantity = stock_quantity - ? WHERE id = ?',
      [item.quantity, item.productId]
    );

    await connection.commit();
    res.status(201).json({ success: true, saleId: saleResult.insertId });
  } catch (error) {
    await connection.rollback();
    res.status(400).json({ error: error.message });
  } finally {
    connection.release();
  }
};`
  },
  {
    id: "rbac",
    filename: "verifyRole.middleware.js",
    language: "javascript",
    badge: "JWT & Role-Based Access Control",
    description: "Server-side authorization guards inspecting cryptographic JWT tokens.",
    code: `import jwt from 'jsonwebtoken';

// Strict Role-Based Access Control Middleware
export const authorizeRole = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid or expired token' });
      }

      // Check if user's role satisfies endpoint permission
      if (!allowedRoles.includes(decoded.role)) {
        return res.status(403).json({ 
          message: 'Access denied: insufficient permissions' 
        });
      }

      req.user = decoded; // Attach user payload
      next();
    });
  };
};`
  },
  {
    id: "schema",
    filename: "schema.sql",
    language: "sql",
    badge: "Normalized MySQL Architecture",
    description: "Third-normal-form relational schema with foreign key constraints & debt tracking.",
    code: `-- AGROTHECK & Business Relational Schema (3NF)
CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  phone VARCHAR(25) UNIQUE,
  current_debt DECIMAL(12, 2) DEFAULT 0.00,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE sales_ledger (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  invoice_number VARCHAR(50) UNIQUE NOT NULL,
  subtotal DECIMAL(12, 2) NOT NULL,
  paid_amount DECIMAL(12, 2) NOT NULL,
  debt_balance DECIMAL(12, 2) GENERATED ALWAYS AS (subtotal - paid_amount) STORED,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_customer FOREIGN KEY (customer_id) 
    REFERENCES customers(id) ON DELETE RESTRICT
) ENGINE=InnoDB;`
  }
];
