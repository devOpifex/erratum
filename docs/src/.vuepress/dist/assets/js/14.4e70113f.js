(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling"}},[t._v("#")]),t._v(" Handling")]),t._v(" "),a("p",[t._v("The basics themselves only bring so much to error handling in R; they, however, enable a lot more.")]),t._v(" "),a("h2",{attrs:{id:"raiser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raiser"}},[t._v("#")]),t._v(" Raiser")]),t._v(" "),a("p",[t._v('One can pass a "raiser," a function that is used instead of the default function when the '),a("code",[t._v("raise")]),t._v(" method is called. By default "),a("code",[t._v("raise")]),t._v(" uses "),a("code",[t._v("stop")]),t._v(" for errors and "),a("code",[t._v("warning")]),t._v(" for warnings.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"print this"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("raiser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crayon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" call. "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("raise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#> Error: print this\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("One can also pass this function straight to the "),a("code",[t._v("raise")]),t._v(" method.")])]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"print this"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nraiser_ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("crayon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" call. "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("FALSE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("raise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("raiser_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#class"}},[t._v("#")]),t._v(" Class")]),t._v(" "),a("p",[t._v("One can check whether the object returned is an error or a warning with "),a("code",[t._v("is.e")]),t._v(" and "),a("code",[t._v("is.w")]),t._v(" respectively.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is an error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nis.e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[1] TRUE\n")])])]),a("h2",{attrs:{id:"jab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jab"}},[t._v("#")]),t._v(" Jab")]),t._v(" "),a("p",[t._v("The function "),a("code",[t._v("jab")]),t._v(" is analogous to "),a("code",[t._v("tryCatch")]),t._v(" but will use "),a("code",[t._v("err")]),t._v("\ninternally. It also allows passing "),a("code",[t._v("e")]),t._v(" and "),a("code",[t._v("w")]),t._v(" along to easily reuse\nerror messages.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("safe_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" jab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n \n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("is.e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   result"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("stop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\nsafe_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('Error in safe_log("a"): non-numeric argument to mathematical function\n')])])]),a("h2",{attrs:{id:"resolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolve"}},[t._v("#")]),t._v(" Resolve")]),t._v(" "),a("p",[t._v("Instead of checking the results of "),a("code",[t._v("tryCatch")]),t._v(" with an "),a("code",[t._v("if")]),t._v(" statement, one might want to use "),a("code",[t._v("resolve")]),t._v(" which will check whether the result is an error or a warning and deal with it accordingly ("),a("code",[t._v("stop")]),t._v(" or "),a("code",[t._v("warning")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Log only accepts numeric(s)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsafe_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" jab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\nsafe_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error: Log only accepts numeric(s)\n")])])]),a("p",[t._v("The "),a("code",[t._v("resolve")]),t._v(" function accepts multiple objects, note that these are\nevaluated in order.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"just a string"')]),t._v("\nwww "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Caution"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nerr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Broken!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nresolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Warning: Caution\nError: Broken!\n")])])]),a("p",[t._v("One can, of course, "),a("code",[t._v("resolve")]),t._v(" objects that are not errors or warnings: nothing happens.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"defer-resolve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defer-resolve"}},[t._v("#")]),t._v(" Defer Resolve")]),t._v(" "),a("p",[t._v("You can also use "),a("code",[t._v("defer_resolve")]),t._v(" to defer the resolve when the function exits.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("safe_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" jab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gah!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n defer_resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Doing something here"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\nsafe_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[1] "Doing something here"\n#> [1] 2.302585\n')])])]),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("safe_log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[1] "Doing something here"\nError: Gah!\n')])])]),a("h2",{attrs:{id:"latch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#latch"}},[t._v("#")]),t._v(" Latch")]),t._v(" "),a("p",[t._v("Errors and warnings can also be latched onto objects so they can be\ndealt with later, functions such as "),a("code",[t._v("is.e")]),t._v(", "),a("code",[t._v("resolve")]),t._v(", and "),a("code",[t._v("skip")]),t._v(" will also work on those objects.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nproblematic "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" latch.e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Not right"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nis.e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problematic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[1] TRUE\n")])])]),a("p",[t._v("This allows escalating the error or warning so it can be dealt with later, e.g.: the problematic object created above with "),a("code",[t._v("latch.e")]),t._v(" can be passed to another function where it raises an error.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("do_sth_with_x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ndo_sth_with_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[1] 2\n")])])]),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("do_sth_with_x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problematic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error: Not right\n")])])]),a("p",[t._v("You can use "),a("code",[t._v("unlatch")]),t._v(" to resolve these.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("unlatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problematic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("h2",{attrs:{id:"skip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skip"}},[t._v("#")]),t._v(" Skip")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("skip")]),t._v(" function is similar to resolve but instead of calling "),a("code",[t._v("stop")]),t._v(" or "),a("code",[t._v("warning")]),t._v(" it "),a("code",[t._v("return")]),t._v("s the error or warning object from the parent function. This is useful to escalate the error to the parent function.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# foo always returns an error")]),t._v("\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Problem!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bar calls foo")]),t._v("\nbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  skip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This should not print"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  return"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# baz calls bar")]),t._v("\nbaz "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" bar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  print"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This should not print either"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nbaz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Error: Problem!\n")])])]),a("p",[t._v("In the above the print message in "),a("code",[t._v("bar")]),t._v(" is never printed, neither is the one in "),a("code",[t._v("baz")]),t._v(": "),a("code",[t._v("skip")]),t._v(" returned the error message which was then checked with "),a("code",[t._v("resolve")]),t._v(" and the error is actually raised.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("You can also set the "),a("code",[t._v("w")]),t._v(" argument of the "),a("code",[t._v("skip")]),t._v(" function to "),a("code",[t._v("TRUE")]),t._v(" to skip warnings, e.g.: "),a("code",[t._v("skip(x, w = TRUE)")])])]),t._v(" "),a("p",[t._v("You can call "),a("code",[t._v("skip")]),t._v(" as many times as you want to escalate the error back as much as necessary.")]),t._v(" "),a("h2",{attrs:{id:"rules-and-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rules-and-checks"}},[t._v("#")]),t._v(" Rules and Checks")]),t._v(" "),a("p",[t._v("When writing code one often themselves writing a lot of conditions to check inputs, outputs, etc.")]),t._v(" "),a("p",[t._v("Together with an error often comes checks that define when it should be raised. Erratum lets one define those rules (with the "),a("code",[t._v("rule")]),t._v(" field or "),a("code",[t._v("addRule")]),t._v(" method), these rules can then be checked with the "),a("code",[t._v("check")]),t._v(" method. Internally it runs the rules and if any of them does not return "),a("code",[t._v("TRUE")]),t._v(" raises the error.")]),t._v(" "),a("p",[t._v("A rule is a function that accepts a single argument and must return a boolean.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Must be a character of length 3 or more"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("rule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" is.character\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("rule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  nchar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# passes")]),t._v("\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# not character")]),t._v("\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# less than 2 character")]),t._v("\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This avoids having to write and re-write checks and their error messages.")]),t._v(" "),a("div",{staticClass:"language-r extra-class"},[a("pre",{pre:!0,attrs:{class:"language-r"}},[a("code",[t._v("err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Must be a numeric"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nerr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("rule "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" is.numeric\n\naddOne "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\naddTwo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  err"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("$")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# returns 3")]),t._v("\naddOne"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# raises error")]),t._v("\naddTwo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);