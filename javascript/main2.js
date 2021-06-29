// var vm = new Vue ({
//     el: '#basic_info',
//     data: {
//         floorList: [
//             {"id": "f1", "val": "2LDK"},
//             {"id": "f2", "val": "3DK"},
//             {"id": "f3", "val": "3LDK"},
//             {"id": "f4", "val": "4DK"},
//             {"id": "f5", "val": "5LDK~"}
//         ]
//     }
// })

var rent = new Vue ({
    el: '#rent',
    data: {
        rent_monthly: 0,
        common_fee_monthly: 0,
        parking_monthly: 0,
        other_monthly: 0,
        start_dt: '2021-07-01',
        shiki_month: 1,
        rei_month: 1,

        shikikin: 0,
        reikin: 0
    }
})


// Vue.component('tr_component', {
//     data: function() {

//     },
//     template: '<tr><td>{{ title }}</td><th><input type="text" v-model="rent_monthly"></th></tr>'
// })

function calc(rent, mon) {
    if (mon == '-'){
        return '-';
    } else {
        return rent * mon;
    }
}
