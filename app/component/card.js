import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Card() {
    return (
      <View>
        <View style={styles.card}>
            <View style={styles.imageCard}></View>
                <View style={styles.detailCard}>
                    <Text style={styles.namaProduk}>Kunyit</Text>
                    <Text style={styles.lokasiProduk}>Jawa Tengah, Indonesia</Text>
                    <Text style={styles.hargaProduk}>Rp 13.000/kg</Text>
                </View>
                <TouchableOpacity style={styles.linkProduk}>
                    <Text style={styles.linkText}>Lihat Produk</Text>
                </TouchableOpacity>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#964F38',
        width: 174,
        marginHorizontal: 10,
        marginVertical: 13,
        borderRadius: 10,
    },   
    imageCard: {
      backgroundColor: '#964F38',
      height: 150,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    detailCard: {
        backgroundColor: 'white',
        textAlign: 'left',
        paddingHorizontal: 15 ,
        paddingVertical: 10,  
    },
    namaProduk: {
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 27,
    },
    lokasiProduk: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
    },
    hargaProduk: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 21,
    },
    linkProduk: {
      backgroundColor: '#964F38',
      justifyContent: 'center',
      textAlign: 'center',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    linkText: {
        textAlign: 'center',
        color: 'white',
        paddingVertical: 5,
        fontWeight: '400',
        fontSize: 16,
    }
});
