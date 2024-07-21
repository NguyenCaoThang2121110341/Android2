import React, { useEffect, useState,useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../Provider/CartContext';

export default function HomeScreen() {
    // const { addToCart } = useContext(CartContext);
    const navigation = useNavigation();
    const handleProductPress = (product) => {
        navigation.navigate('SingleProduct', { product });
    };

    const handleRemoveFromCart = (productId) => {
        setItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
      };
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    useEffect(() => {
        alert('Cart items have been updated: ' + JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCartPress = (product) => {
        addToCart(product);
        alert('Product has been added to the cart');
        // setCartItems((prevCartItems) => [...prevCartItems, product]);
        // alert('Product has been added to the cart');
    };
   
    const handleCartPress = () => {
        navigation.navigate('Cart', {
          cartItems,
          onRemoveFromCart: handleRemoveFromCart, // Pass the callback function to the Cart component
        });
      };

    useEffect(() => {
        getAllProduct();
    }, []);

    const getAllProduct = () => {
        axios
            .get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                setProducts(response.data);
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
            });
    };

    return (
        // <View>
        //     <Image source={require('../assets/bn.jpg')} style={styles.logo} />
        //     <View style={styles.catetitle}>
            
        //         <Text style={{ fontSize: 20, color: 'red', fontWeight: '600' }}>Products</Text>
        //         <Text style={{ fontSize: 15 }}>More</Text>
        //     </View>
        //     <ScrollView>
        //         <View style={styles.container}>
        //             {products.map((product) => (
        //                 <TouchableOpacity
        //                     style={styles.item}
        //                     key={product.id}
        //                     onPress={() => handleProductPress(product)}
        //                 >
        //                     <View>
        //                         <Image style={styles.img} source={{ uri: product.image }} />
        //                     </View>
        //                     <View style={styles.des}>
        //                         <Text style={styles.des_text}>{product.title}</Text>
        //                         <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
        //                         <View style={styles.ratingContainer}>
        //                             <Text style={styles.ratingText}>Rating: </Text>
        //                             <FontAwesome name="star" style={styles.starIcon} />
        //                             <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
        //                             <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
        //                         </View>
        //                     </View>
        //                 </TouchableOpacity>
        //             ))}
        //         </View>
        //     </ScrollView>
        // </View>
        <View style={styles.container}>
              
        <ScrollView contentContainerStyle={styles.productContainer}>
               <Image source={require('../assets/bn.jpg')} style={styles.banner} />
               <Text>  </Text>
               <TouchableOpacity style={styles.checkoutButton} onPress={handleCartPress}>
                <Text style={styles.buttonText}>CART</Text>
                <Icon style={styles.iconcart} name="shopping-cart" size={20} color="white" />
            </TouchableOpacity>
            <Text>  </Text>
        <Text style={styles.title}>PRODUCTS</Text>
            {products.map((product) => (
                <TouchableOpacity
                    style={styles.productItem}
                    key={product.id}
                    onPress={() => handleProductPress(product)}
                >
                    <Image style={styles.productImage} source={{ uri: product.image }} />

                   

                    <View style={styles.productDetails}>
                        <Text style={styles.productName}>{product.title}</Text>
                        <Text style={styles.productPrice}>Price: ${product.price.toFixed(2)}</Text>
                        {/* <View style={styles.ratingContainer}>
                            <Text style={styles.ratingText}>Rating: </Text>
                            <FontAwesome name="star" style={styles.starIcon} />
                            <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
                            <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
                        </View> */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.cartButton}
                                onPress={() => handleProductPress(product)}
                            >
                                <Text style={styles.buttonText}>Details</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity
                                style={styles.cartButton}
                                onPress={() => handleAddToCartPress(product)}
                            >
                                <Text style={styles.buttonText}>Cart</Text>
                            </TouchableOpacity> */}

                            {/* <TouchableOpacity style={styles.cartButton} onPress={handleCartPress}>
                                <Text style={styles.buttonText}>Giỏ hàng</Text>
                            </TouchableOpacity> */}
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            
        </View>





    );
}

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         justifyContent: 'space-between',
//     },
//     catetitle: {
//         flexDirection: 'row',justifyContent: 'space-between',
//         marginTop: 15,
//     },
//     item: {
//         width: '48%',
//         marginBottom: 20,
//         backgroundColor: '#fff',
//         borderRadius: 8,
//         elevation: 2,
//     },
//     img: {
//         width: '100%',
//         height: 150,
//         borderTopLeftRadius: 8,
//         borderTopRightRadius: 8,
//     },
//     des: {
//         padding: 8,
//     },
//     des_text: {
//         color: 'black',
//         textAlign: 'center',
//         marginBottom: 4,
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     price: {
//         color: 'black',
//         textAlign: 'center',
//         marginBottom: 4,
//         fontSize: 14,
//     },
//     ratingContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginTop: 4,
//     },
//     ratingText: {
//         color: 'black',
//     },
//     starIcon: {
//         color: 'gold',
//         fontSize: 16,
//         marginRight: 2,
//     },
//     ratingValue: {
//         color: 'black',
//         marginRight: 2,
//     },
//     ratingCount: {
//         color: 'black',
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        width: '100%',
        borderRadius: 2,
        elevation: 2,
        backgroundColor: '#fff',
        color: 'green'
    },
    productContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    productItem: {
        width: '48%',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 2,
    },
    productImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    productDetails: {
        padding: 8,
    },
    productName: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        color: 'black',
        textAlign: 'center',
        marginBottom: 4,
        fontSize: 14,
    },
    ratingContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom:2,
        
    },
    ratingText: {
        color: 'black',
    },
    starIcon: {
        color: 'gold',
        fontSize: 16,
        marginRight: 2,
    },
    ratingValue: {
        color: 'black',
        marginRight: 2,
    },
    ratingCount: {
        color: 'black',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    detailsButton: {
        flex: 1,
        marginRight: 4,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
    cartButton: {
        flex: 1,
        marginLeft: 4,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 8,
        borderRadius: 4,
        
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    checkoutButton: {
    
        marginRight: 4,
        backgroundColor: 'green',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 4,
        width:340,
        height: 50
    },
    iconcart:{
        textAlign: 'center',
    },
    banner:{
        width:340,
        height: 200

    }
});