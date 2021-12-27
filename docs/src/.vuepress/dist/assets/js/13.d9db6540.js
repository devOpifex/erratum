(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{372:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"get-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[t._v("#")]),t._v(" Get Started")]),t._v(" "),s("h2",{attrs:{id:"basics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[t._v("#")]),t._v(" Basics")]),t._v(" "),s("p",[t._v("The two core functions of the package are "),s("code",[t._v("e")]),t._v(" and "),s("code",[t._v("w")]),t._v(", the former creates and error and the latter a warning.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"erratum!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("erratum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n")])])]),s("p",[t._v("Note that this printed the error message (with "),s("code",[t._v("cat")]),t._v(") and thus does not actually stops code execution. However, "),s("code",[t._v("e")]),t._v(" can stop code execution with the "),s("code",[t._v("stop")]),t._v(" or "),s("code",[t._v("fatal")]),t._v(" method (different names, identical execution, "),s("code",[t._v("fatal")]),t._v(" is more expressive).")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("raise")]),t._v(" method works for both errors and warnings.")])]),t._v(" "),s("p",[t._v("Perhaps even better is the method named "),s("code",[t._v("raise")]),t._v(" which will simply raise the error ("),s("code",[t._v("stop")]),t._v(') or raise the warning: one method for all "issues."')]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"erratum!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# err$raise()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# err$stop()")]),t._v("\n\nerr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("fatal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error: erratum!\n")])])]),s("p",[t._v("Similar for warnings, use "),s("code",[t._v("w")]),t._v(" to create a warning object and use the "),s("code",[t._v("warn")]),t._v(" method to throw an actual "),s("code",[t._v("warning")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("www "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"attention!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# err$raise()")]),t._v("\nwww"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Warning message:\nattention! \n")])])]),s("p",[t._v("If you want to retrieve the message as a string to process it differently you can use the "),s("code",[t._v("message")]),t._v(" field.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" www"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nclass"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('[1] "attention!"\n[1] "character"\n')])])]),s("h2",{attrs:{id:"standardisation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standardisation"}},[t._v("#")]),t._v(" Standardisation")]),t._v(" "),s("p",[t._v("Erratum treats errors and warning as objects. This, amongst other things, allows for easy standardisation of messages.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input must be a numeric"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nadd_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("is.numeric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("raise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nlog_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("is.numeric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("raise"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nadd_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlog_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"two"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Error: Input must be a numeric\nError: Input must be a numeric\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Using "),s("RouterLink",{attrs:{to:"/guide/handling.html#rules-and-checks"}},[t._v("rules and checks")]),t._v(" is more convenient.")],1)]),t._v(" "),s("h2",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[t._v("#")]),t._v(" Return")]),t._v(" "),s("p",[t._v("In the example given above we raise the error if input conditions are not met. Instead of doing this using the "),s("code",[t._v("stop")]),t._v(", "),s("code",[t._v("raise")]),t._v(", or "),s("code",[t._v("fatal")]),t._v(", one could use the "),s("code",[t._v("return")]),t._v(" methods which returns the error from the parent function.")]),t._v(" "),s("p",[t._v("In the example below "),s("code",[t._v("add_")]),t._v(" returns the error if the input is not numeric "),s("strong",[t._v("but does not halt code execution with "),s("code",[t._v("stop")]),t._v(".")])]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Input must be a numeric"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nadd_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("is.numeric"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    err"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("return"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" add_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"one"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nis.e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Input must be a numeric\nTRUE\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Read more about this in the "),s("a",{attrs:{href:"/guide/escalation"}},[t._v("escalation")]),t._v(" section.")])]),t._v(" "),s("h2",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),s("p",[t._v("You can create a template that will be used to print errors and warnings. Make sure it includes "),s("code",[t._v("%s")]),t._v(": the warning or error message.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("template.e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Whoops: %s - sorry!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sumin\' went wrong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Whoops: Sumin' went wrong - sorry!\n")])])]),s("p",[t._v("Note that it supports "),s("a",{attrs:{href:"https://github.com/r-lib/crayon",target:"_blank",rel:"noopener noreferrer"}},[t._v("crayon"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("template.e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crayon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ne"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sumin\' went wrong"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("These can be reset by simply re-running the respective template function.")]),t._v(" "),s("div",{staticClass:"language-r extra-class"},[s("pre",{pre:!0,attrs:{class:"language-r"}},[s("code",[t._v("template.e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);