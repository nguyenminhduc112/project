import { StyleSheet, Text, View, SafeAreaView, useWindowDimensions, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TabView, SceneMap } from 'react-native-tab-view';
import WatingForYou from "../../images/watingForYou.jpg";
import EmLa from "../../images/emLa.jpg";
import Love from "../../images/love.webp";
import RemoveLove from "../../images/x.webp";
const DATA = [
  {
    id: '1',
    name: 'Wating For You',
    author: 'Mono',
    image: WatingForYou,
    love: false,
  },
  {
    id: '2',
    name: 'Em là',
    author: 'Mono',
    image: EmLa,
    love: true,
  },
  {
    id: '3',
    name: 'Quên anh đi',
    author: 'Mono',
    image: WatingForYou,
    love: false,
  },
  {
    id: '4',
    name: 'Anh không thể',
    author: 'Mono',
    image: EmLa,
    love: true,
  },
];
const renderImageLove = (check,id) => {
  if (check) {
    return (
      <TouchableOpacity onPress={()=>{
        for (let index = 0; index < DATA.length; index++) {
            const kara = DATA[index];
            if(kara.id == id && kara.love == true){
              kara.love = false;
              alert(kara.love)
            }
        }
      }}><Image source={RemoveLove} style={styles.imageLove} /></TouchableOpacity>
    )
  } else {
  
    return (
      <TouchableOpacity onPress={()=>{
        for (let index = 0; index < DATA.length; index++) {
            const kara = DATA[index];
            if(kara.id == id && kara.love == false){
              kara.love = true;
              alert(kara.love)
            }
        }
      }}><Image source={Love} style={styles.imageLove} /></TouchableOpacity>
    )
  }
}
const Item = ({ urlImage = '', nameKara, author, check,renderImageLove,id }) => (

  <TouchableOpacity style={[styles.item, { marginTop: 10 }]} onPress={() => {
    alert("Bài " + nameKara +" đang chạy")
  }}>
    <View >
      <Image source={urlImage} style={styles.image} />
    </View>
    <View style={{ padding: 20 }}>
      <Text style={styles.nameKara}>{nameKara}</Text>
      <Text style={styles.author}>Ca Sĩ: {author}</Text>
      {renderImageLove(check,id)}
    </View>
  </TouchableOpacity>
);
const renderLove = (urlImage = '', nameKara, author, check,renderImageLove,id) =>{
  if(check){
    return (
      <TouchableOpacity style={[styles.item, { marginTop: 10 }]} onPress={() => {
        alert("Bài " + nameKara +" đang chạy")
      }}>
        <View >
          <Image source={urlImage} style={styles.image} />
        </View>
        <View style={{ padding: 20 }}>
          <Text style={styles.nameKara}>{nameKara}</Text>
          <Text style={styles.author}>Ca Sĩ: {author}</Text>
          {renderImageLove(check,id)}
        </View>
      </TouchableOpacity>
    )
  }
}
const ItemLove = ({ urlImage = '', nameKara, author, check,renderImageLove,id }) => (
  renderLove(urlImage , nameKara, author, check,renderImageLove,id)
);
const renderItem = ({ item }) => <Item nameKara={item.name} author={item.author} urlImage={item.image} check={item.love} renderImageLove={renderImageLove} id={item.id} />;
const renderItemLove = ({ item }) => <ItemLove nameKara={item.name} author={item.author} urlImage={item.image} check={item.love} renderImageLove={renderImageLove} id={item.id} />;
const ListKara = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} >
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  </View>
);
const ListLove = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} > 
     <FlatList
      data={DATA}
      renderItem={renderItemLove}
      keyExtractor={item => item.id}
    />
  </View>
);


const renderScene = SceneMap({
  first: ListKara,
  second: ListLove,
});


const IndexKara = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Danh sách kara' },
    { key: 'second', title: 'Danh sách yêu thích' },
  ]);
  return (
    <SafeAreaView style={styles.container} >
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </SafeAreaView>
  )
}

export default IndexKara

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    marginTop: 10,
  },
  imageLove: {
    marginTop: 10,
    width: 25,
    height: 25
  },
  item: {
    flexDirection: 'row', borderBottomWidth: 1,
    borderBottomColor: 'green',
    padding: 5,
    backgroundColor: 'white'
  },
  nameKara: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  author: {
    marginTop: 5,
    fontSize: 16
  }
})