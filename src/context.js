import React, { Component } from 'react'

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = { 

        products: [],
        detailProduct: '',
        cart: [],
        productDetail: {},
        tax: 0,
        subtotal: 0,
        finaltotal: 0,
    }

    handleAsync = ()=>{
     fetch('https://fakestoreapi.com/products')
             .then(res=>res.json())
             .then(json=>{
                 let tempArr = [...json];
                 let FinalArr = tempArr.map(el=>{
                     let n = Object.assign({} , el);
                     n.count = 0;
                     n.total = n.price;
                     n.tax = n.price * .15;
                     n.sum = 0;
                     return n;
                 })
                 this.setState(()=>{
                     return{
                         products: FinalArr
                     }
                 }, ()=>{
                     console.log(this.state.products);
                 })
             })
    }

    componentDidMount(){
        if(this.state.products.length === 0){
            this.handleAsync();
        }

    }

    getProduct = (id)=>{
        const product = this.state.products.find((item) => item.id === id);
        console.log(product);
        return product;
    }

    getCartIndex = (id)=>{
        const index = this.state.cart.findIndex((item) => item.id === id);
        console.log(index);
        return index;
    }

    

    removeProduct = (id)=>{
        const product = this.getProduct(id);
        let tempArr = this.state.cart.filter( el => el.id !== id);
        this.setState(()=>{
            return{
                cart: tempArr
            }
        }, ()=>{
            this.calcTotals();
        })
    }

    setProductDetails = (id)=>{
        let ProductDetails = this.getProduct(id);
        this.setState(()=>{
            return{
                productDetail: ProductDetails
            }
        },()=>{console.log(this.state.detailProduct)})
    }

    incrementProduct = (id)=>{

        let ind = this.getCartIndex(id);
        let tempArr = [...this.state.cart];

        tempArr[ind].count = tempArr[ind].count + 1;
        tempArr[ind].total = parseFloat((tempArr[ind].price * tempArr[ind].count).toFixed(2));

        this.setState(()=>{
            
            return{
                cart : tempArr
            }
        }, ()=>{
            this.calcTotals();
        })

    }

    calcTotals = ()=>{
        let tempArr = [...this.state.cart];

        let SubTotal = 0;
        tempArr.map((item)=>{
            SubTotal += item.total;
        })

        let FinalTax = parseFloat((SubTotal * .15).toFixed(2));
        let FinalSum = parseFloat((FinalTax + SubTotal).toFixed(2));

        this.setState(()=>{
            return{
                tax: FinalTax,
                subtotal: SubTotal,
                finaltotal: FinalSum
            }
        })

    }

    decrementProduct = (id)=>{

        let ind = this.getCartIndex(id);
        let tempArr = [...this.state.cart];

        tempArr[ind].count = tempArr[ind].count - 1;
        tempArr[ind].total = parseFloat((tempArr[ind].price * tempArr[ind].count).toFixed(3));

        if(tempArr[ind].count === 0){
            this.removeProduct(id);
        }
        else{
            this.setState(()=>{
            
                return{
                    cart : tempArr 
                }
            }, ()=>{
                this.calcTotals();
            })
        }
    }

    addToCart = (id) =>{

        let addedProduct = this.getProduct(id);
        let tempCart = [];
        this.setState(()=>{
            let countUpdate = Object.assign({}, addedProduct);
            countUpdate.count = countUpdate.count + 1;
            tempCart = [...this.state.cart, countUpdate];
            return{
                cart : tempCart 
            };
            },()=>{
                this.calcTotals();
                console.log(this.state);
            })
    }   

    findInCart = (id) =>{
        let found = false;
        found = this.state.cart.some(el => el.id === id);
        if(!found){
            return false;
        }
        else{
            return true;
        }
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleAsync:this.handleAsync,
                addToCart:this.addToCart,
                findInCart:this.findInCart,
                setProductDetails:this.setProductDetails,
                removeProduct: this.removeProduct,
                incrementProduct: this.incrementProduct,
                decrementProduct: this.decrementProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}



const ProductConsumer =  ProductContext.Consumer;

export {ProductProvider, ProductConsumer};