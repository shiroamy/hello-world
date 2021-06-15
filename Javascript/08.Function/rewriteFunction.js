// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

//使用箭頭函數改寫上述程式碼

let ask = (question, yes, no) => {
    (confirm(question)) ? yes() : no()
};

ask(
    "Do you agree?",
    function () { alert("You agreed."); },
    function () { alert("You canceled the execution."); }
);