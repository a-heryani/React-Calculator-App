export const CalculatorOperations = {
  '/': {
    name: 'divide',
    symbol: '÷',
    func: (prevValue, nextValue) => prevValue / nextValue
  },
  '*': {
    name: 'multiply',
    symbol: '×',
    func: (prevValue, nextValue) => prevValue * nextValue
  },
  '-': {
    name: 'subtract',
    symbol: '−',
    func: (prevValue, nextValue) => prevValue - nextValue
  },
  '+': {
    name: 'add',
    symbol: '+',
    func: (prevValue, nextValue) => prevValue + nextValue
  },
  '=': {
    name: 'equals',
    symbol: '=',
    func: (prevValue, nextValue) => nextValue
  }
}

export const DigitKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]
