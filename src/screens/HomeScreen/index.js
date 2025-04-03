import React, {useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,StatusBar, FlatList,Image,Modal} from 'react-native';

export default function HomeScreen({route}){

    const {nome, foto,user} = route.params;

    const [modalVisible, setModalVisible] = useState(false);

    const bandas = [
        {
            nome:"Spiritbox",
            foto:"https://rollingstone.com.br/media/uploads/2025/03/spiritbox-foto-jonathan-weiner.jpg",
            descricao:"Conhecida por sua sonoridade intensa, vocais poderosos e composições complexas, a banda rapidamente ganhou destaque no cenário do metal moderno.",
            genero:"Metalcore",
        },
        {
            nome:"Jinjer",
            foto:"https://roadiecrew.com/wp-content/uploads/jinjer-2-scaled-e1626380699553.jpg",
            descricao:"Banda ucraniana de metal progressivo/metalcore conhecida por sua técnica impecável, vocais brutais e melódicos, e letras profundas.",
            genero:"Metal Progressivo",
        },
        {
            nome:"Avenged Sevenfold",
            foto:"https://rockstage.com.br/wp-content/uploads/2025/01/Banda-Avenged-Sevenfold-no-Brasil-em-2025.jpg",
            descricao:"Banda americana de heavy metal/hard rock formada em 1999 em Huntington Beach, Califórnia. Conhecida por sua mistura de metalcore, metal sinfônico, rock progressivo e até influências country.",
            genero:"Heavy Metal",
        },
        {
            nome: "Nothing More",
            foto: "https://theblitz.com/images/easyblog_articles/3859/IMG_5699-1.jpg",
            descricao: "Banda americana de rock alternativo/metal progressivo formada em 2003 em San Antonio, Texas. Conhecida por suas letras profundas, performances energéticas e instrumentais inovadores, incluindo uma 'Scorpion Tail' mecânica usada ao vivo.",
            genero: "Rock Alternativo/Metal Progressivo",
        }
    ]

    const cardFlatlist = ({item}) => {
        return(
            <View style={styles.cardContainer}>
                <Image source={{uri:item.foto}} style={styles.cardImage}/>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.cardTitle}>{item.nome}</Text>
                        <Text style={styles.cardDescription}>{item.descricao}</Text>
                        <Text style={styles.cardGenre}>{item.genero}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1E1E1E" translucent={false} />
            <View style={styles.header}>
                <Text style={styles.title}>VOIDRIFFS</Text>
            </View>
            <TouchableOpacity
             onPress={()=>{
                setModalVisible(true);
             }}
            >
            <View style={styles.profileContainer}>
                    <Text style={styles.profileText}>Bem vindo {user}</Text>
            </View>
            </TouchableOpacity>
            <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:"#FF0000",fontWeight:'bold', margin:10}}>Bandas de Metal Moderno:</Text>
                    <FlatList
                        data={bandas}
                        renderItem={cardFlatlist}
                        keyExtractor={(item) => item.nome}
                        horizontal={false}
                        showsHorizontalScrollIndicator={false}
                    />
            </View>
            <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => setModalVisible(false)}
>
    <View style={styles.modalView}>
        <View style={styles.modalContent}>
            <Image 
                style={styles.modalImage} 
                source={{ uri: foto }} 
            />
            <Text style={styles.modalText}>Bem-vindo ao <Text style={{fontFamily:'BleedingCowboys', color:"#FF0000"}}>Voidriffs</Text>, {nome}!</Text>
            <Text style={[styles.modalText, { fontSize: 16, color: '#AAAAAA' }]}>
                Sua jornada pelo metal moderno começa aqui.
            </Text>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
            >
                <Text style={styles.closeButtonText}>ROCK ON!</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>
        </View>
    );

    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
      },
      title: {
        fontFamily: 'BleedingCowboys',
        fontSize: 48,
        color: '#FF0000',
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: { width: 3, height: 3 },
        textShadowRadius: 2,
      },
      header:{
        width: '100%',
        height: 125,
        padding:10,
        backgroundColor: '#1E1E1E',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000',
      },
      profileContainer:{
        borderRadius: 8,
        margin: 20,
        padding: 20,
        alignItems: 'center',
        borderColor: '#FF0000',
        borderWidth: 1,
      },
      profileText:{
        fontFamily: 'Roboto',
        fontSize: 24,
        color: '#FF0000',
        textAlign: 'center',
      },
        cardContainer:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1E1E1E',
            borderRadius: 8,
            margin: 10,
            padding: 10,
            alignItems: 'center',
            borderColor: '#FF0000',
            borderWidth: 1,
        },
        cardImage:{
            width: "80%",
            height: 150,
            borderRadius: 8,
            marginBottom: 10,
        },
        cardTitle:{
            fontFamily: 'Roboto',
            fontSize: 18,
            color: '#FF0000',
            textAlign: 'center',
            marginBottom: 5,
        },
        cardDescription:{
            fontFamily: 'Roboto',
            fontSize: 14,
            color: '#AAAAAA',
            textAlign: 'center',
            marginBottom: 5,
        },
        cardGenre:{
            fontFamily: 'Roboto',
            fontSize: 14,
            color: '#AAAAAA',
            textAlign: 'center',
        },
        modalView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(30, 30, 30, 0.95)',
            padding: 20,
        },
        modalContent: {
            backgroundColor: '#1E1E1E',
            borderRadius: 10,
            padding: 25,
            alignItems: 'center',
            borderWidth: 2,
            borderColor: '#FF0000',
            shadowColor: '#FF0000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.8,
            shadowRadius: 10,
            elevation: 10,
            width: '90%',
        },
        modalImage: {
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: '#FF0000',
            marginBottom: 20,
        },
        modalText: {
            fontSize: 22,
            color: '#FFFFFF',
            marginBottom: 15,
            fontFamily: 'Roboto',
            textAlign: 'center',
        },
        closeButton: {
            backgroundColor: '#FF0000',
            paddingVertical: 12,
            paddingHorizontal: 30,
            borderRadius: 25,
            marginTop: 15,
            borderWidth: 1,
            borderColor: '#FFFFFF',
        },
        closeButtonText: {
            color: '#FFFFFF',
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 1,
        },
})