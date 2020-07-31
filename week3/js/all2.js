var app = new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1586934917210,
                unit: '組',
                category: '人形',
                title: '聖誕老公公',
                origin_price: 1999,
                price: 1789,
                description: '聖誕節禮物首選',
                content: '送禮物的老公公',
                is_enabled: 1,
                imageUrl: 'https://i.imgur.com/Hyz6bbj.jpg',
                star: "★★★★★"
            },
            {
                id: 1196934917910,
                unit: '組',
                category: '人形',
                title: '娃娃套組',
                origin_price: 5999,
                description: '5種一套一次滿足',
                content: '',
                price: 4999,
                is_enabled: 0,
                imageUrl: 'https://i.imgur.com/PoxrXrR.jpg',
                star:"★★"
            }
        ],
        tempProduct: {},
    },
    methods: {
        updateProduct() {
            //編輯
            const tempId = this.tempProduct.id; 
            const newId = new Date().getTime();
            if(tempId){ //假如tempId為true執行下面程式碼
            this.products.forEach((item,i) => {
                if(item.id === tempId){
                    this.products[i] = this.tempProduct;
                }
            })
           }else{ //tempId若為false執行else
            //新增
                this.tempProduct.id = newId;
                this.products.push(this.tempProduct);
           }
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        openModal(isNew, item) {
            if (isNew == 'new') {
                this.tempProduct = {};
                $('#productModal').modal('show');
            } else if (isNew == 'edit') {
                this.tempProduct = Object.assign({}, item);
                $('#productModal').modal('show');
            } else if (isNew == 'delete') {
                $('#delProductModal').modal('show');
                this.tempProduct = Object.assign({}, item);
            }
        },
        delProduct() {
            const id = this.tempProduct.id;
            if (this.tempProduct.id) {
                this.products.forEach((item, i) => {
                    if (item.id === id) {
                        this.products.splice(i, 1);
                        this.tempProduct = {};
                    }
                });
            }
            $('#delProductModal').modal('hide');
        },

    },
});