const o={methods:{numberComma(e){const n=new RegExp("\\B(?<!\\.\\d*)(?=(\\d{3})+(?!\\d))","g");return typeof e<"u"&&e!==null?e.toString().replace(n,","):e}}};export{o as n};
