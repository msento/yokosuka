// vue—p‚Ìjs

var app1 = new Vue({
    el: '#app-1',
    data: { message : 'Hello! 1' }
})

var app2 = new Vue({
    el: "#app-2",
    watch: {
        message: function(newVal, oldVal) {
            this.error.require = (newVal.length < 1) ? true : false;
            this.error.tooLong = (newVal.length > 5) ? true : false;
        }
    },
    data: {
        message: 'Hello! 2',
        error: {
            require: false,
            tooLong: false
        }
    }
})

var app106 = new Vue({
    el: '#app-106',
    data: { type: 'A' }
})

var app107 = new Vue({
    el: '#app-107',
    data: { colorList: ['Red','Green','Blue']}
})

var app108 = new Vue({
    el: '#app-108',
    methods: {
        hello: function() {
            alert("Hello! 108");
        }
    }
})

var app109 = new Vue({
    el: '#app-109',
    data: { message: 'Hello! 109' }
})

var app120 = new Vue({
    el: '#app-120',
    data: { message: 'Hello! 120' }
})

var app122 = new Vue({
    el: '#app-122',
    data: { message: 'Hello! 122' }
})

var app123 = new Vue({
    el: '#app-123',
    data: { message: 'Hello! 123' }
})

Vue.component('my-element-140', {
    template: '<strong>Hello! 140</strong>'
})
var app140 = new Vue({
    el: '#app-140'
})

var MyComponent141 = Vue.extend({
    template: '<strong>Hello! 141</strong>'
})
Vue.component('my-component-141', MyComponent141)
var app141 = new Vue({
    el: '#app-141'
})

var app142 = new Vue({
    el: '#app-142',
    data: {
        message: 'Hello! 142',
        msg1: '',
        msg2: ''
    }
})
app142.message = 'Bye!'
console.log(app142.$el.textContent);
Vue.nextTick(function() {
    console.log(app142.$el.textContent);
})

var app143 = new Vue({
    el: '#app-143',
    data: {
        colorList: {
            red: '#f00',
            green: '#0f0'
        }
    },
    methods: {
        addBlue: function() {
            Vue.set(this.colorList, 'blue', '#00f')
        },
        deleteBlue: function() {
            Vue.delete(this.colorList, 'blue')
        }
    }
})

Vue.directive('font16', {
    inserted: function(el) {
        el.style.fontSize = '16pt'
    }
})
var app144 = new Vue({
    el: '#app-144'
})

Vue.filter('toupper', function(value) {
    return value.toUpperCase()
})
var app145 = new Vue({
    el: '#app-145',
    data: { message: 'Hello! 145' }
})

Vue.component('my-element-202', {
    props: [ 'value' ],
    template: '<div>{{ value }}</div>'
})
var app202 = new Vue({
    el: '#app-202'
})

var MyElement203 = Vue.extend({
    props: [ 'message' ],
    template: '<div>{{ message }}</div>'
})
var vm = new MyElement203({
    propsData: { message: 'Hello! 203' }
}).$mount('#el-203');
var app203 = new Vue({
    el: '#app-203'
})

var app204 = new Vue({
    el: '#app-204',
    data: {
        message: 'Hello! 204'
    },
    computed: {
        upperMessage: function() {
            return this.message.toUpperCase();
        }
    }
})

var app205 = new Vue({
    el: '#app-205',
    data: {
        message: 'Hello! 205'
    },
    methods: {
        toUpper: function() {
            this.message = this.message.toUpperCase();
        },
        toLower: function() {
            this.message = this.message.toLowerCase();
        }
    }
})

var app206 = new Vue({
    el: '#app-206',
    data: {
        message: 'new',
        newmsg: 'new',
        oldmsg: 'old'
    },
    watch: {
        message: function(newVal, oldVal) {
            this.newmsg = newVal;
            this.oldmsg = oldVal;
        }
    },
    methods: {
        change: function(e) {
            this.message = e.target.form.text1.value;
        }
    }
})

var MyComp1 = { template: '<div style="color:red;">Hello! 252</div>' }
var MyComp2 = { template: '<div style="color:green;">Hello! 252</div>' }
var MyComp3 = { template: '<div style="color:blue;">Hello! 252</div>' }
var app252 = new Vue({
    el: '#app-252',
    components: {
        'my-comp1': MyComp1,
        'my-comp2': MyComp2,
        'my-comp3': MyComp3
    }
})

var myMixin = {
    methods: {
        hello: function() {
            alert("Hello! 261");
        }
    }
}
var app261 = new Vue({
    el: '#app-261',
    mixins: [ myMixin ]
})
