import  React, {useState} from 'react';
import { Text, View, StyleSheet , TouchableOpacity , TextInput,ScrollView} from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [pricebefore , setpricebefore]=useState();
    const [showPricebefore,setshowPricebefore] = useState();
    const [discount , setdiscount]=useState();
    const [showdiscount,setshowdiscount] = useState();
    const [priceafter , setpriceafter]=useState();
    const [showPriceafter,setshowPriceafter] = useState();
    const [thanks , setthanks]=useState();
  return (
    <ScrollView style={styles.container}>
      <View style={{alignItems:"center"}}>
        <Text style={styles.title}>
          DISCOUNT CALCULATOR
        </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TextInput style={styles.input} placeholder="Total Price" keyboardType = 'numeric' onChangeText={(val1)=>{setpricebefore(val1)}}>
      
      </TextInput>
  
      </View>
       <View style={{flexDirection:'row'}}>
     
      <TextInput style={styles.input}  placeholder="Discount %" keyboardType = 'numeric' onChangeText={(val2)=>{setdiscount(val2)}}></TextInput>
        
        
  
      </View>
      <View style={{flexDirection:'row',justifyContent: 'center',}}>
      
        <TouchableOpacity style={styles.discountBtn} onPress={()=>{discountfun(pricebefore , setpricebefore, showPricebefore,setshowPricebefore,discount , setdiscount,showdiscount,setshowdiscount,priceafter , setpriceafter,showPriceafter,setshowPriceafter,thanks , setthanks)}}>
        <Text style={{fontSize:22,color:"white",fontWeight:"bold",}}>Discount</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{marginVertical:20,justifyContent:"center",}}>
        <Text style={styles.statsHead}>STATISTICS</Text>
      </View>
      <View style={{justifyContent:"center",}}>
      <Text style={styles.stats}>Price before Discount :  {showPricebefore}</Text>
      <Text style={styles.stats}>Discount % : {showdiscount}</Text>
      <Text style={styles.stats}>Price After Discount : {showPriceafter}</Text>
      <Text style={styles.stats} >{thanks}</Text>
      </View>
      
    </ScrollView>
  );
}
function discountfun(pricebefore , setpricebefore, showPricebefore,setshowPricebefore,discount , setdiscount,showdiscount,setshowdiscount,priceafter , setpriceafter,showPriceafter,setshowPriceafter,thanks , setthanks){
    
    setshowPricebefore(pricebefore)
    setshowdiscount(discount)

    priceafter = pricebefore-((pricebefore/100)*discount)
    setshowPriceafter(priceafter)
    thanks="Thanks for your love"
    setthanks(thanks)

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:25,
    flex: 1,
    justifyContent: 'top',
    alignItems:"center",
    backgroundColor: '#03045e',
    padding: 10,
    paddingTop:150,
    borderRadius:15,
    
  },
    title :{
    fontSize:32,
    color:"white",
    justifyContent: 'center',
    height:50,
    marginBottom:50,
    textAlign:"center",
    marginHorizontal:10,

    borderRadius:10 ,
  },
  input:{
    width:370,
    paddingLeft:15,
    marginVertical:15,
    height:50,
    marginRight:10,
    backgroundColor:'#fef9ef',
    borderRadius:10 ,
    fontSize:22,
  },
  discountBtn:{
     justifyContent: 'center',
      backgroundColor:'#90e0ef',
      marginVertical:20,
      width:200,
      borderRadius:10 ,
      height:50,
      alignItems:'center',
      textAlign:"center",
  },
  statsHead :{
    fontSize:32,
    color:"white",
    textAlign:"center",
  },
  stats: {
      fontSize:22,
      marginVertical:5,
      color:"white",
      paddingLeft:10,
      
    },
});
