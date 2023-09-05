import numpy as np
import matplotlib.pyplot as plt

# Input 3x3 matrix
matrix_a = np.array([[2.0, 1.0, 3.0],
                     [0.0, 2.0, 1.0],
                     [1.0, 0.0, 2.0]])

# Calculate eigenvalues
eigenvalues = np.linalg.eigvals(matrix_a)

# Plotting eigenvalues
plt.scatter(range(1, 4), eigenvalues, color='b', marker='o')
plt.xlabel('Eigenvalue Index')
plt.ylabel('Eigenvalue')
plt.title('Eigenvalues of the Matrix')
plt.grid(True)
plt.show()
