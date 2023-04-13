import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../components/PropertyCard";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PlacesScreen = () => {
  const route = useRoute();

  const data = [
    {
      id: "0",
      place: "Bangalore",
      placeImage:
        "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "City in Karnataka, India",
      properties: [
        {
          id: "10",
          name: "FabHotel Zeke",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
          rating: 3.6,
          address:
            "346, Hennur Main Road, Post, Kalyan Nagar, 560043 Bangalore, India ",
          oldPrice: 4600,
          newPrice: 3312,
          latitude: "13.0359",
          longitude: "77.6431",
          photos: [
            {
              id: "100",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845616.jpg?k=87bc315f35830189d9a1c935c3e167e648543c27f39ee4cafc5cf73ee24393b9&o=&hp=1",
            },
            {
              id: "101",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845633.jpg?k=19a43441c40e9c9ff3b57d6a1a7c379c4def04730e34f76fd4a298eaefcd23d1&o=&hp=1",
            },
            {
              id: "102",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845621.jpg?k=52411b8fb2fe37edf07da6d3dfb145cc85288ac210f28ff19608ba101f1bba0e&o=&hp=1",
            },
            {
              id: "103",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845650.jpg?k=36bbad9d47f2db957eddbf922e711fbfc9ab2bf901ceaa1bd5d1ca4dc857f21c&o=&hp=1",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845660.jpg?k=0db1ba8f8f2c1de0ded8b1dc30d4f181a52b898b0a9107c5a24f86688cc24c5e&o=&hp=1",
            },
            {
              id: "105",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845662.jpg?k=94bdc326cbec92e658a262a7d81387e65ede9d250489b1a3cc6d22d6b9c935ff&o=&hp=1",
            },
            {
              id: "106",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845665.jpg?k=637ae74710f45147445e49211d54d63a6200b6857f1bd03e38e41cceb0b931eb&o=&hp=1",
            },
            {
              id: "107",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845623.jpg?k=dc33256ff9ff9eda46683c776c1cf9af04910364ec8d1d9523b8cf80d18cca65&o=&hp=1",
            },
            {
              id: "108",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/433845673.jpg?k=24dd44dc2ac1bfda8aabdbff24571d211f42a4b5cf175fc9043113b61f57f670&o=&hp=1",
            },
            {
              id: "109",
              image: "2",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "11",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
          name: "Regenta Inn Indiranagar Bangalore",
          rating: 4,
          address:
            " 648/B, Regenta Inn Indiranagar, Binnamangala 1st stage Indiranagar, 560038 Bangalore, India",
          oldPrice: 4201,
          newPrice: 3327,
          latitude: "12.9784",
          longitude: "77.6408",
          photos: [
            {
              id: "110",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223496641.jpg?k=070266558a879c2926e5511569c4828a007a3e1057b63ccfa30120c859341d1d&o=&hp=1",
            },
            {
              id: "111",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495252.jpg?k=46de660c903dde8a4250610e13a17241645853c4088d76e7a7741b6bc52ad8ea&o=&hp=1",
            },
            {
              id: "112",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494915.jpg?k=b1c09ff0ff09bd86d06861cfebb76a937090f7339a09ca5d53662db340d90cba&o=&hp=1",
            },
            {
              id: "113",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498294.jpg?k=445b45130c2315805662dd6df9ad44009097b06e89d01aa0afc473b54ba04af5&o=&hp=1",
            },
            {
              id: "114",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497917.jpg?k=10ebeb3f85490fd2cc9fd3d6f8389ea7f1a35c9e4b29b219bccd6eb89c6a1cd5&o=&hp=1",
            },
            {
              id: "115",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498097.jpg?k=51244caaa9e4e33ad7d1580b0a1fcf4795c0db3a0fb3d625720e2f0ec7646a1c&o=&hp=1",
            },
            {
              id: "116",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223498063.jpg?k=7b456a08a5becb5bf3f9b181719cb9d8d61c8a9e193ab07fe1b5a2c8887da3b6&o=&hp=1",
            },
            {
              id: "117",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223497742.jpg?k=7d87188e85821b7b9e1871f898ffe1b8817b1620f3dac4207be18d8946e40d56&o=&hp=1",
            },
            {
              id: "118",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223495166.jpg?k=fc2ba7c31b133d48a0b8c1fce679ef3957de259f4ca0d23534b8e32f983fe9c4&o=&hp=1",
            },
            {
              id: "119",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/223494890.jpg?k=4cd3feffb3dd3343be0bd6644a69d070c27824860af763ef7e0490b454799e1b&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "12",
          name: "Bloom Hotel - Bengaluru Airport",
          rating: 4.2,
          address:
            "Down Town Park, Sadahalli Gate, Kempegowda Int'l Airport Rd, 562157 Bangalore, India",
          oldPrice: 3800,
          newPrice: 3078,
          latitude: "13.1989",
          longitude: "77.7068",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695517.jpg?k=c2559cc321dd56a7beb32262c84d60bc1760430a4a49ac6f8713a2fa03cd0d36&o=&hp=1",
          photos: [
            {
              id: "120",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695517.jpg?k=c2559cc321dd56a7beb32262c84d60bc1760430a4a49ac6f8713a2fa03cd0d36&o=&hp=1",
            },
            {
              id: "121",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695562.jpg?k=ca777d889f58838b1158a9e264b18d8f4ceff509a9fb89d345ef84151fd461b0&o=&hp=1",
            },
            {
              id: "122",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695518.jpg?k=240da3b294b015aa9268ba4bb8f09c9120bfabd6668ba55678fa5afda1582930&o=&hp=1",
            },
            {
              id: "123",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695521.jpg?k=99fffb6766013b84bc4780be3de5d7a73837062b99501f2cb3b039ebfb957d04&o=&hp=1",
            },
            {
              id: "124",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695792.jpg?k=c434efe348180f5a1a292b31432f46277bf5e43c7b85bce486665e3f424d0549&o=&hp=1",
            },
            {
              id: "125",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695791.jpg?k=ad248a728c71fffa384e1961e72b5a77462ab58da88c6f3074d5ff20ded68e51&o=&hp=1",
            },
            {
              id: "126",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430695896.jpg?k=84734c40aaf7e6960b01e3eb931c24318119d61494ce05cf50831a88b10026cf&o=&hp=1",
            },
            {
              id: "128",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430696362.jpg?k=41296a49d0c2f96dc4a72eddb9e42fc4b648408dcf5b1ceed2e73add6c5daf5d&o=&hp=1",
            },
            {
              id: "129",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/430696348.jpg?k=0a2f5bd39e71a59ae2554974021c8ef8540795758961baf3b48ee9a1b1548bd7&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Hyderabad",
      placeImage:
        "https://images.pexels.com/photos/9373357/pexels-photo-9373357.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "City in Telangana, India",
      properties: [
        {
          id: "20",
          name: "FabExpress Airport Stay Inn",
          rating: 3.5,
          address:
            "CFC-4/C, Road No-2 Hardware Park, Beside TCS, Tukkuguda, 501351 Hyderabad, India",
          oldPrice: 4332,
          newPrice: 3200,
          photos: [
            {
              id: "140",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814194.jpg?k=38b97dc9e93b02ce00d14d9625dea692677aec64feea9e9ea76b154f703362a0&o=&hp=1",
            },
            {
              id: "141",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814179.jpg?k=12c76ec416673fc09ae8085250cebd14928b35671e9d72f782da4256c394f610&o=&hp=1",
            },
            {
              id: "142",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814188.jpg?k=530786e8585f567d1dee1e0e7cfdc551063c3c154d3f161d11674ee16f78b4c7&o=&hp=1",
            },
            {
              id: "143",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814184.jpg?k=192eee45d30ae6425619495061c922330745cc1cf57bf65d6da6f9fa481b6f22&o=&hp=1",
            },
            {
              id: "144",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814185.jpg?k=2217db46e371a47298bc3feee62357acda5bf2802f2042ebfa5b35b9cabc85ed&o=&hp=1",
            },
            {
              id: "145",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814187.jpg?k=e752022ae6b6701448156f8b5101b1d7dbf5176f405ce60573ad633a57028efc&o=&hp=1",
            },
            {
              id: "146",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814182.jpg?k=f6129a926e1d863bc29d0dbf0eb6650ddfff6a5ca12b2b967cd7661babe8ca97&o=&hp=1",
            },
            {
              id: "147",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814170.jpg?k=7c51fee51c3b222aff367a41ab640e9cb794ae339e407dfb38bb45f7320dc91e&o=&hp=1",
            },
            {
              id: "148",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814168.jpg?k=270c0b95619412803742ebdcea2c03203f1f26a06ea797ad715a0a0b24fe85fa&o=&hp=1",
            },
            {
              id: "149",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814197.jpg?k=ca3eec900001077869d3591221f306025775cca085d91a0bcae3b722484c8b6e&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "22",
          name: "Olive Service Apartments",
          rating: 4.5,
          address:
            "Plot 73, Shilpi Valley, Gafoor Nagar, Madhapur, Opp Hitech City Mindspace, Hyderabad",
          oldPrice: 5200,
          newPrice: 4100,
          photos: [
            {
              id: "160",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244256022.jpg?k=039b6ea2059809603206e35aa336d9ef97ca8b793327277580ce19001ba3a492&o=&hp=1",
            },
            {
              id: "161",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258918.jpg?k=0e9b069b0719ba5cdbfba03fa7420a8c6096dad9c699c2a1baca3d1f7c80d2f1&o=&hp=1",
            },
            {
              id: "162",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257685.jpg?k=70dc1dfb4f8f5abde720afc61fcc757d76567f4a293c486206de5fc81119686c&o=&hp=1",
            },
            {
              id: "163",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258924.jpg?k=1f98c00674333999f29ce3b095eece29069f8304bf7697467a405b417132ee5f&o=&hp=1",
            },
            {
              id: "164",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258928.jpg?k=8e03b53ddf32342bdac53e3aa1cb92aae88496e8afa8fbb1f62fa6e8f023ec2c&o=&hp=1",
            },
            {
              id: "165",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258926.jpg?k=8935acba4ff9588ea20674cffd5f309f8862aa6950a1dddc99d79e9afe16cde5&o=&hp=1",
            },
            {
              id: "166",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258921.jpg?k=95be913693f4ec3cbae9e30f525a2b03a6e61d0aa2e2fdb1bf0a6f00362dcbad&o=&hp=1",
            },
            {
              id: "167",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257008.jpg?k=7e3939fc4b54b7752f476f6f819e12a0054659b0ce4a9d6414c0b2db310e175e&o=&hp=1",
            },
            {
              id: "168",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257005.jpg?k=7eff1e1de6cec34762fa374c083ff27189acdd8410a1d36f110d099921b6df84&o=&hp=1",
            },
            {
              id: "169",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258932.jpg?k=abdca02df16c21de889f9a0790ec6bece09a9fce92550079baa0e1eebf9b8f80&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
  ];
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High",
    },
    {
      id: "1",
      filter: "cost:High to Low",
    },
  ];
  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);
  useEffect(() => {
    if (items.length > 0) return;

    setLoading(true);

    const fetchProducts = async () => {
      const colRef = collection(db,"places");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      setLoading(false);
    };
    fetchProducts();
  }, [items]);
  const searchPlaces = data?.filter((item) => item.place === route.params.place);
  const [sortedData,setSortedData] = useState(items);
  console.log(searchPlaces)

  const compare = (a,b) => {
    if(a.newPrice > b.newPrice){
      return -1;
    }
    if(a.newPrice < b.newPrice){
      return 1;
    }
    return 0;
  }

  const comparision = (a,b) => {
    if(a.newPrice < b.newPrice){
      return -1;
    }
    if(a.newPrice > b.newPrice){
      return 1;
    }
    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisibile(false)
    switch(filter){
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  }

  console.log(route.params);
 
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Map",{
          searchResults:searchPlaces,
        })} style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

      {loading ? (
        <Text>Fetching places....</Text>
      ) : (
        <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
      )}

    

      <BottomModal
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
            onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom:30
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort </Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                    {selectedFilter.includes(item.filter) ? (
                        <FontAwesome name="circle" size={18} color="green" />
                    ) : (
                        <Entypo name="circle" size={18} color="black" />
                    )}
                  
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
