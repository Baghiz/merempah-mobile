import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
      <View style={styles.content}>

        <ScrollView>
            <Text style={styles.header}>Lihat Produk</Text>
            
            <View style={styles.image}>

            </View>

            <View style={styles.produkDetail}>
                <View style={styles.detailWrapper}>
                    <Text style={styles.penjelasan}>Nama Toko</Text>
                    <Text style={styles.titikDua}>:</Text>
                    <Text style={styles.produk}>Tani Sehat</Text>
                </View>
                <View style={styles.detailWrapper}>
                    <Text style={styles.penjelasan}>Nama Produk</Text>
                    <Text style={styles.titikDua}>:</Text>
                    <Text style={styles.produk}>Kunyit</Text>
                </View>
                <View style={styles.detailWrapper}>
                    <Text style={styles.penjelasan}>Harga</Text>
                    <Text style={styles.titikDua}>:</Text>
                    <Text style={styles.produk}>Rp 13.000/Kg</Text>
                </View>
                <View style={styles.detailWrapper}>
                    <Text style={styles.penjelasan}>Lokasi</Text>
                    <Text style={styles.titikDua}>:</Text>
                    <Text style={styles.produk}>Sukoharjo,Jawa Tengah</Text>
                </View>
                <View style={styles.detailWrapper}>
                    <Text style={styles.penjelasan}>Deskripsi</Text>
                    <Text style={styles.titikDua}>:</Text>
                    <Text style={styles.produk}>Kunyit asli Sukoharjo yang dipanen langsung oleh petani Sukoharjo</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Tambahkan ke Keranjang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBorder}>
                <Text style={styles.buttonBorderText}>Beli Sekarang</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBorder}>
                <Text style={styles.buttonBorderText}>Hubungi Penjual</Text>
            </TouchableOpacity>


        </ScrollView>


      </View>
    );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 24,
    color: '#964F38',
    paddingBottom: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  produkDetail: {
    flexDirection: 'column',
  },
  penjelasan: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 18,
    width: 115,
  }, 
  detailWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },  
  produk: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
    paddingHorizontal: 10,
  },  
  button: {
    marginVertical: 20,
    backgroundColor: '#964F38',
    borderRadius: 10,   
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 10,
    color: '#fff',
  },
  buttonBorder: {
    borderColor: '#964F38',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
},
buttonBorderText: {
    color: '#964F38',
    textAlign: 'center',
    paddingVertical: 10,
}
});