import numpy as np

# Take input for the first 3x3 matrix
print("Enter elements for the first 3x3 matrix:")
matrix_a = []
for i in range(3):
    row = [float(x) for x in input().split()]
    matrix_a.append(row)

# Take input for the second 3x3 matrix
print("Enter elements for the second 3x3 matrix:")
matrix_b = []
for i in range(3):
    row = [float(x) for x in input().split()]
    matrix_b.append(row)

# Matrix multiplication
result_matrix = np.dot(matrix_a, matrix_b)
print("Result of matrix multiplication:")
print(result_matrix)

# Finding the inverse of the first matrix
inverse_matrix_a = np.linalg.inv(matrix_a)
print("Inverse of the first matrix:")
print(inverse_matrix_a)

# Convert the first matrix to diagonal matrix
diagonal_matrix_a = np.diag(np.diag(matrix_a))
print("Diagonal matrix:")
print(diagonal_matrix_a)

# Convert the first matrix to upper triangular matrix
upper_triangular_matrix_a = np.triu(matrix_a)
print("Upper triangular matrix:")
print(upper_triangular_matrix_a)

# Calculate eigenvalues and eigenvectors of the first matrix
eigenvalues, eigenvectors = np.linalg.eig(matrix_a)
print("Eigenvalues:")
print(eigenvalues)
print("Eigenvectors:")
print(eigenvectors)

