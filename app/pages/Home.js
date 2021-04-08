import React, { cloneElement } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

import Card from '../component/card';

export default function Home() {
    return (
      <View style={styles.content}>
          
          <ScrollView>
          <View>

          </View>
          <View style={styles.jumbotron}>
              <View style={styles.detailJumbotron}>
                  <Text style={styles.jumbotronText}>Authentic Spices</Text>
                  <Text style={styles.jumbotronText}>From Indonesia</Text>
                  <Text style={styles.jumbotronDetail}>Mau cari rempah?</Text>
                  <Text style={styles.jumbotronDetail}>Kini lebih mudah dengan Merempah!</Text>
                  <View style={styles.scrollContainer}>
                      <View style={styles.scrollBar }></View>
                      <View style={styles.scrollBar}></View>
                      <View style={styles.scrollBar}></View>
                      <View style={styles.scrollBar}></View>
                  </View>
              </View>
          </View>
          <View style={styles.filterContainer}>
              <View style={styles.arah}>
                  <Text style={styles.arahText}>1</Text>
              </View>
              <View style={styles.filter}>
                  <Text style={styles.filterText}>Semua</Text>
              </View>
              <View style={styles.filter}>
                  <Text style={styles.filterText}>Akar</Text>
              </View>
              <View style={styles.filter}>
                  <Text style={styles.filterText}>Batang</Text>
              </View>
              <View style={styles.filter}>
                  <Text style={styles.filterText}>Daun</Text>
              </View>
              <View style={styles.arah}>
                  <Text style={styles.arahText}>1</Text>
              </View>
          </View>

            <Text style={styles.header}>Semua Produk</Text>
            
            <View style={styles.cardWrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </View>

            <View style={styles.iklan}>
                <Text style={styles.detailIklan}>Tingkatkan daya tahan tubuh dengan mengkonsumsi rempah-rempah.</Text>
                <TouchableOpacity style={styles.buttonIklan}>
                    <Text style={styles.buttonTextIklan}>Klik Di Sini</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardWrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </View>

            <View style={styles.container}>

            <TouchableOpacity style={styles.buttonBorder}>
                    <Text style={styles.buttonBorderText}>Liat Selengkapnya</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.subscribeWall}>
                <Text style={styles.subscribeText}>Dapatkan Info Terbaru dari Merempah?</Text>
                <View style={styles.subscribeInput}>
                    <TextInput style={styles.textinput} placeholder="Masukkan Email" underlineColorAndroid={'transparent'} />
                    <TouchableOpacity style={styles.subscribeButton}>
                        <Text style={styles.subscribeButtonText}>Berlangganan</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'stretch',
  },
  jumbotron: {
      height: 200,
  },
  detailJumbotron: {
      backgroundColor: '#E3D081',
      paddingVertical: 20,
  },
  jumbotronText: {
      textAlign:'center',
      color: '#964F38',
      fontSize: 30,
      fontWeight: 'bold',
  },
  jumbotronDetail: {
    textAlign:'center',
    color: '#964F38',
    fontSize: 14,
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  scrollBar: {
    borderBottomColor: '#964F38',
    width: 20,
    borderBottomWidth: 3,
    marginHorizontal: 3,
    marginTop: 20,
  },
  filterContainer: {
      flexDirection: 'row',
      margin: 0,
      alignItems: 'center',
      justifyContent:'center',
  },
  arah: {
      backgroundColor: '#964F38',
      borderRadius: 100,
      marginHorizontal: 10,
      paddingVertical: 10,
      width: '10%',
  },
  arahText: {
      textAlign:'center',
  },
  filter: {
    backgroundColor: '#964F38',
    paddingVertical: 10,
  },
  filterText: {
      marginHorizontal: 10,
  },
  header: {
    fontSize: 20,
    color: '#964F38',
    paddingBottom: 10,
    marginVertical: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }, 
  iklan: {
      backgroundColor: '#964F38',
      marginVertical: 20,
      paddingHorizontal: 30,
  },
  detailIklan: {
      fontSize: 18,
      lineHeight: 23,
      fontWeight: '700',
      color: '#E3D081',
      marginVertical: 30,
      width: 280,
  },
  buttonIklan: {
      backgroundColor: '#E3D081',
      borderRadius: 10,
      marginVertical: 20,
      width: 176,
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonTextIklan: {
      color: '#964F38',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
  },
  buttonBorder: {
      borderColor: '#964F38',
      borderWidth: 1,
      borderRadius: 10,
      width: 176,
      height: 35,
  },
  buttonBorderText: {
      color: '#964F38',
      textAlign: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 24,
  },
  container: {
      alignItems: 'center',
      marginVertical: 30,
  },
  subscribeWall: {
    backgroundColor: '#E3D081',  
    padding: 20,
  },
  subscribeText: {
    color: '#964F38',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 23,
    width: 242,
  },
  subscribeInput: {
    flexDirection: 'row',
    marginVertical: 20,
  },    
  textinput: {
    alignSelf: 'stretch',
    height: 35,
    width: 216,
    color: '#909090',
    borderColor: '#b0c4de',
    borderWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 15,
  },
  subscribeButton: {
      backgroundColor: '#964F38',
      borderTopRightRadius: 8,
      borderBottomRightRadius: 8,
  },
  subscribeButtonText: {
      textAlign:'center',
      color: 'white',
      padding: 8,
  }

});