var app = new Vue({
    el: '#app',
    data:{
        items: [
            {
                name: 'Work',
                ischecked: false
            },
            {
                name: 'Buy food',
                ischecked: true
            },
            {
                name: 'Walk',
                ischecked: false
            }
        ],
        newItem: '',
    },
    computed: {
        orderedItemList(){
            return this.items.sort((a,b) => {
                return a.ischecked < b.ischecked ? -1 : 1;
            })
        }
    },
    methods: {
        addItem(newItem){
            console.log(newItem);
            console.log(this.items);
            this.items.push({name: newItem, ischecked: false});
        },
        removeItem(itemToRemove){
            this.items = this.items
            .filter((item) => item.name !== itemToRemove.name);
        },
        toogleCheck(item){
            item.ischecked = !item.ischecked;
        }
    },
    created: function(){

    },
})

