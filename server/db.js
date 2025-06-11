let transactions = [];
let nextId = 1;

function getAllTransactions() {
  return transactions;
}

function addTransaction(transaction) {
  const newTransaction = { id: nextId++, ...transaction };
  transactions.push(newTransaction);
  return newTransaction;
} 

function deleteTransaction(id) {
  const index = transactions.findIndex(t => t.id === id);
  if (index === -1) return false;
  transactions.splice(index, 1);
  return true;
}

module.exports = {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
};
