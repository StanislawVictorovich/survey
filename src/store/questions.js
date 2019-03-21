export default [
  {
    title: `What will this code outputs? <br>
    <code>alert( 20e-1['toString'](2) );</code>`,
    choises: [
      '2', '10', '20', 'NaN', '4', 'there is an error'
    ],
    correct: 3
  },
  {
    title: `What does this code do:<br><code>break me;</code>`,
    choises: [
      'breakes javascript.', 'exits loop on tag «me».', 'generetes error.'
    ],
    correct: 1
  },
  {
    title: 'What os the sum of [] + 1 + 2?',
    choises: [
      '1', 'NaN', 'undefined', '12', 'other'
    ],
    correct: 4
  },
  {
    title: `What the result will be of the expression below?<br><code>null + {0:1}[0] + [,[1],][1][0]</code>`,
    choises: [
      '0', '1', '2', 'undefined', 'NaN'
    ],
    correct: 2
  },
  {
    title: `What does this code do:<br><code>let a = (1,5 - 1) * 2;<br>alert(a);</code>`,
    choises: [
      '0.9999999999999', '0.5', '8', '-0.5', '4'
    ],
    correct: 2
  },
  {
    title: `What the result will be of the expression below?<br><code>alert( 20e-1['toString'](2) );</code>`,
    choises: [
      '2', '10', '20', 'NaN', 'there is an error in code'
    ],
    correct: 1
  },
  {
    title: `What does this code do:<br><code>function User() { }<br>User.prototype = { admin: false };<br><br>
    let user = new User();<br><br>User.prototype = { admin: true };<br><br>alert(user.admin); </code>`,
    choises: [
      'false', 'undefined', 'true'
    ],
    correct: 0
  },
  {
    title: `Which of the objects has <code>'name'?</code>`,
    choises: [
      'vasya.__proto__', 'vasya.prototype', 'User.__proto__'
    ],
    correct: 0
  },
  {
    title: `Does the function executed clear of the code below?<br><code>sayHi();<br><br>function sayHi() {<br>
    alert("Hello");<br>} </code>`,
    choises: [
      'Yes', 'No, declaration must be first'
    ],
    correct: 0
  },
  {
    title: `What the result will be of the expression below?<br>0 || 1 && 2 || 3</code>`,
    choises: [
      '0', '1', '2', '3', '4', '5', 'false'
    ],
    correct: 2
  },
  {
    title: `What is the variable equal to of the code below?<br><code>let name = "pupkin".replace("p", "d")</code>`,
    choises: [
      'pupkin', 'pudkin', 'dupkin', 'dudkin'
    ],
    correct: 2
  },
  {
    title: `Is there any difference between expressions??<br><code>!!( a && b )<br>(a && b)</code>`,
    choises: [
      'yes', 'no', 'what is the .... "!!"????'
    ],
    correct: 1
  }
]
