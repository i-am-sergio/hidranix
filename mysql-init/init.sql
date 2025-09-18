-- Crear la base de datos si no existe (por seguridad)
CREATE DATABASE IF NOT EXISTS hidranix;
USE hidranix;

-- Crear la tabla Payments si no existe (para evitar errores)
CREATE TABLE IF NOT EXISTS Payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  transaction_amount FLOAT NOT NULL,
  dni VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  createdAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar registros de ejemplo en la tabla Payments
INSERT INTO Payments (transaction_amount, dni, firstname, lastname, email, payment_method) VALUES
(150.75, '12345678A', 'Juan', 'Pérez', 'juan.perez@email.com', 'credit_card'),
(89.99, '87654321B', 'María', 'Gómez', 'maria.gomez@email.com', 'debit_card'),
(200.50, '11223344C', 'Carlos', 'Rodríguez', 'carlos.rodriguez@email.com', 'paypal'),
(45.25, '44332211D', 'Ana', 'López', 'ana.lopez@email.com', 'credit_card'),
(300.00, '55667788E', 'Pedro', 'Martínez', 'pedro.martinez@email.com', 'bank_transfer'),
(75.30, '99887766F', 'Laura', 'Sánchez', 'laura.sanchez@email.com', 'debit_card'),
(125.00, '66778899G', 'Miguel', 'Fernández', 'miguel.fernandez@email.com', 'credit_card'),
(50.00, '22334455H', 'Elena', 'Díaz', 'elena.diaz@email.com', 'paypal'),
(180.90, '33445566I', 'David', 'Romero', 'david.romero@email.com', 'credit_card'),
(95.45, '44556677J', 'Sofía', 'Torres', 'sofia.torres@email.com', 'debit_card');

-- Verificar que los registros se insertaron correctamente
-- SELECT 'Registros insertados en la tabla Payments:' AS '';
-- SELECT * FROM Payments;

-- Mostrar conteo de registros
SELECT COUNT(*) AS total_payments FROM Payments;