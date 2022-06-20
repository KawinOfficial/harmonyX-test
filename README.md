# harmonyX-test


download and npm install 

<b>Exam: 1 </b><br />
path: "http://127.0.0.4:3005/api/number-integer <br />
input: {
 "array": [2,5,6,4,7],
 "target": 10
}
<br />
output: {
  "result": [2,3]
}
<br />

<b>Exam: 2 </b> <br />
path: "http://127.0.0.4:3005/api/vending-machine <br />
input: {
  "price": 27,
  "money": 100
}
<br />
output: {
 "diffPay": 73,
 "result": {
    "1": 1,
    "2": 1,
    "5": 0,
    "10": 0,
    "20": 1,
    "50": 1,
    "100": 0,
    "500": 0,
    "1000": 0
  }
}
