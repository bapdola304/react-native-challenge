import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import product01 from '../../assets/product01.png'
import { Button } from 'react-native-paper';
import { orderData } from '../../data/order';

class AllComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    calculatorPrice = (productList) => {
        const listFilter = productList.filter(item => item.price)
        if (listFilter.length < 2) return listFilter[0].price * listFilter[0].quantity;
        return listFilter.filter(item => item.price).reduce((a, b) => {
            return a.price * a.quantity + b.price * b.quantity;
        })
    }

    renderProductItem = () => {
        return (
            orderData.map(item => {
                return (
                    <View style={styles.productItem} key={item.id}>
                        <View style={styles.productTime}>
                            <Text style={{ color: '#9d9fa8' }}>{item.time}</Text>
                            <Text style={{ color: '#5d80fc' }}>{item.status}</Text>
                        </View>
                        {
                            item.products.map(product => {
                                return (
                                    <View style={styles.wrapItem} key={product.id}>
                                        <View style={{ width: '30%' }}>
                                            <Image source={product.image} style={{ width: 80, height: 80 }} />
                                        </View>
                                        <View style={{ width: '60%' }}>
                                            <Text style={styles.name}>{product.name}</Text>
                                            {
                                                product.price ?
                                                    <Text style={styles.price}>$ {product.price}</Text>
                                                    : <Text style={styles.gift}>Gift</Text>
                                            }
                                        </View>
                                        <View style={{ width: '10%' }}>
                                            <Text style={{ color: '#9d9fa8' }}>x {product.quantity}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }

                        <View style={{ alignItems: 'flex-end', paddingRight: 16, paddingBottom: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text>Total: </Text>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>$ {this.calculatorPrice(item.products)}.00</Text>
                            </View>
                            {item.status !== 'Done' &&
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Button mode="contained" style={styles.btnCancel} color='#b3b5bc' uppercase={false}>
                                        Cancel
                            </Button>
                                    <Button mode="contained" style={styles.btnPay} uppercase={false}>
                                        Pay
                            </Button>
                                </View>
                            }
                        </View>

                    </View>
                )
            })
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f7f9fb' }}>
                <ScrollView>
                    {this.renderProductItem()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    productItem: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 10,
        width: '90%',
        marginVertical: 15,
        marginLeft: '5%'
    },
    productTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#e1e3e6',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    wrapItem: { flexDirection: 'row', marginTop: 16, paddingHorizontal: 10 },
    price: { fontSize: 18, fontWeight: '600', color: '#494f54', marginTop: 6 },
    gift: { backgroundColor: '#5d80fc', color: '#ffffff', width: 60, height: 20, borderRadius: 20, textAlign: 'center', lineHeight: 20 },
    name: { fontSize: 18, fontWeight: '600', color: '#494f54' },
    btnCancel: { borderRadius: 50, width: 100, backgroundColor: '#ffffff' },
    btnPay: { borderRadius: 50, width: 100, backgroundColor: '#5d80fc', marginLeft: 20 }
});
export default AllComponent;
