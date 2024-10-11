var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>' // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:1 // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:10 // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:7 // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:7 // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:7 // /home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:7
ReferenceError: document is not defined
                         ^^

SyntaxError: Unexpected identifier 'is'
    at wrapSafe (node:internal/modules/cjs/loader:1350:18)
    at Module._compile (node:internal/modules/cjs/loader:1379:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0
ReferenceError: document is not defined
                         ^^

SyntaxError: Unexpected identifier 'is'
    at wrapSafe (node:internal/modules/cjs/loader:1350:18)
    at Module._compile (node:internal/modules/cjs/loader:1379:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0
ReferenceError: document is not defined
                         ^^

SyntaxError: Unexpected identifier 'is'
    at wrapSafe (node:internal/modules/cjs/loader:1350:18)
    at Module._compile (node:internal/modules/cjs/loader:1379:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0
ReferenceError: document is not defined
                         ^^

SyntaxError: Unexpected identifier 'is'
    at wrapSafe (node:internal/modules/cjs/loader:1350:18)
    at Module._compile (node:internal/modules/cjs/loader:1379:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0
ReferenceError: document is not defined
              ^

SyntaxError: Unexpected token ':'
    at wrapSafe (node:internal/modules/cjs/loader:1350:18)
    at Module._compile (node:internal/modules/cjs/loader:1379:20)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
                       ^

ReferenceError: document is not defined
    at Object.<anonymous> (/home/danzor/repos/github.com/yuandandi/learn/lbootstrap/belajar-koding/alert.js:1:24)
    at Module._compile (node:internal/modules/cjs/loader:1434:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1518:10)
    at Module.load (node:internal/modules/cjs/loader:1249:32)
    at Module._load (node:internal/modules/cjs/loader:1065:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:158:12)
    at node:internal/main/run_main_module:30:49

Node.js v22.2.0

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

