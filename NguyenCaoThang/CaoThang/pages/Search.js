import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet,TouchableOpacity,ScrollView, Image } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Search() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigation = useNavigation();
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

const handleSearchInputChange = (text) => {
  setSearchInput(text);
};

const handleSearch = () => {
  const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  setProducts(filteredProducts);
};

const handleProductPress = (product) => {
  navigation.navigate('SingleProduct', { product });
};

  return (
    <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchInput}
                    onChangeText={handleSearchInputChange}
                />

<TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>Search</Text>
                </TouchableOpacity>
               
            </View>
            <ScrollView contentContainerStyle={styles.productContainer}>
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
                           
                            
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 20,
  },
   button: {
    backgroundColor: 'green',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
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
      marginBottom: 2,
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
      backgroundColor: 'purple',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 4,
  },
  cartButton: {
      flex: 1,
      marginLeft: 4,
      backgroundColor: 'orange',
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: 4,
  },
  allcart: {
      height: 30,
      backgroundColor: 'violet',
      borderRadius: 4,
  },
  buttonText: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
  },
  buttonCartText: {
      color: 'white',
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold',
  },
  searchContainer: {
      flexDirection: 'row',
      marginBottom: 10,
  },
  searchInput: {
      flex: 1,
      height: 40,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      paddingHorizontal: 10,
      

   
  },
  searchButton: {
      backgroundColor: 'blue',
      paddingHorizontal: 12,
      paddingVertical: 10,
      marginLeft: 10,
      borderRadius: 4,
  },
  searchButtonText: {
      color: 'white',
      fontWeight: 'bold',
  },
});