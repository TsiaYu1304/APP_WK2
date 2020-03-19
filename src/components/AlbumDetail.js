import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const AlbumDetail=()=>{
return (
    <ScrollView>
    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{  uri: albumData[0].thumbnail_image}}    
            />
            <View style={styles.headerContentStyle}>
                <Text style={styles.titleStyle}>{albumData[0].title}</Text>
                <Text style={styles.artistStyle}>{albumData[0].artist}</Text>
            </View>
        </View>
        <View>
            <Image
            style={styles.imageStyle}
            source={{
                uri:
                  albumData[0].image
             }}
            />
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{  uri: albumData[1].thumbnail_image}}    
            />
            <View style={styles.headerContentStyle}>
                <Text style={styles.titleStyle}>{albumData[1].title}</Text>
                <Text style={styles.artistStyle}>{albumData[1].artist}</Text>
            </View>
        </View>
        <View>
            <Image
            style={styles.imageStyle}
            source={{
                uri:
                  albumData[1].image
             }}
            />
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{  uri: albumData[2].thumbnail_image}}    
            />
            <View style={styles.headerContentStyle}>
                <Text style={styles.titleStyle}>{albumData[2].title}</Text>
                <Text style={styles.artistStyle}>{albumData[2].artist}</Text>
            </View>
        </View>
        <View>
            <Image
            style={styles.imageStyle}
            source={{
                uri:
                  albumData[2].image
             }}
            />
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{  uri: albumData[3].thumbnail_image}}    
            />
            <View style={styles.headerContentStyle}>
                <Text style={styles.titleStyle}>{albumData[3].title}</Text>
                <Text style={styles.artistStyle}>{albumData[3].artist}</Text>
            </View>
        </View>
        <View>
            <Image
            style={styles.imageStyle}
            source={{
                uri:
                  albumData[3].image
             }}
            />
        </View>
    </View>


    <View style={styles.cardContainerStyle}>
        <View style={styles.thumbnailContainerStyle}>
            <Image
            style={styles.thumbnailStyle}
            source={{  uri: albumData[4].thumbnail_image}}    
            />
            <View style={styles.headerContentStyle}>
                <Text style={styles.titleStyle}>{albumData[4].title}</Text>
                <Text style={styles.artistStyle}>{albumData[4].artist}</Text>
            </View>
        </View>
        <View>
            <Image
            style={styles.imageStyle}
            source={{
                uri:
                  albumData[4].image
             }}
            />
        </View>
    </View>

    </ScrollView>

    
);
};

const styles=StyleSheet.create({
    thumbnailStyle:{
        height :80,
        width:80,
        margin :5,
    },
    imageStyle:{
        height:400,
        width:null,
        margin:10,
    },
    cardContainerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        margin:5,

    },
    thumbnailContainerStyle:{
        flexDirection:"row",
        justifyContent:"flex-start",
        margin:10,
        marginBottom:0,
    },
    headerContentStyle:{
        padding:5,
        flexDirection:"column",
        justifyContent:"space-around",
        paddingLeft:10,
    },

    artistStyle:{
        fontSize:18,
    },

    titleStyle:{
        fontSize:20,
    }
});


export default AlbumDetail;