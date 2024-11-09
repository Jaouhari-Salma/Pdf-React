import { StyleSheet ,  Font,} from "@react-pdf/renderer";
Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf" }, // Regular
     // Bold
  ],
});


// import

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    // fontFamily: 'Roboto',
  },
  textRoboto: {
    fontFamily: "Roboto",
  },
  header: {
    width: "100%",
    height: "15%",
    display: "flex",
    marginBottom: 8,
    gap: 2,
    // backgroundColor: "gray",
  },
  view_logo: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
   
    padding: 8,
  },
  logo: {
    width: 60,
    height: 60,
    marginLeft: "20px",
  },
  header_sections: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
    // backgroundColor: "red",
  },
  Hsection1: {
    width: "50%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
  },
  Hsection2: {
    width: "50%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 10,
  
    // backgroundColor:"gray"
  },
  title: {
    width: "100%",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C5D3E8",
    fontSize: 14,
    borderWidth: 0,
    borderRadius: 10,
    borderTopWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  infoG_1: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  Infositems_1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  Infositems_2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
  },
  infoHeader: {
    width: "100%",
    height: "18%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    backgroundColor: "#C5D3E8",
  },
  infoG_2: {
    width: "100%",
    height: "27%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  view_ICE: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    backgroundColor: "#C5D3E8",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  client: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  // Table Section

  viewTable:{
    width:'100%',
    height:"100%" },
  table: {
    width: "100%",
    borderColor: "#000000",
    borderStyle: "solid",
    borderWidth: 1,
    // borderLeftWidth: 0,
    borderTopWidth: 0,
    
    
    flex: 1,
  },
  tableRow: {
    width: "100%",
    flexDirection: "row",
    borderBottom: 1,
  },
  lastTableRow: {
    height: "100%",
    flex: 1,
    borderBottom: 0,
  },
  lastTableCol: {
    borderRight: 0,
  },
  tableRowCell: {
    borderBottomWidth: 1,
    borderBottomColor:"#525457"
  },
  tableHeader: {
    fontSize: 7,
    fontWeight: "extrabold",
    padding: 5,
    borderLeftColor: "#000000",
    borderRight: 1,
    backgroundColor: "#D2E0FB",
    alignItems: "center",
    textAlign: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomWidth:0,
    borderLeftWidth:0,
    

  },
  tableCell: {
    fontSize: 8,
    fontWeight: "bold",
    padding: 5,
    borderColor: "#000000",
    borderStyle: "solid",
    borderRight: 1,
  },
  textRight: {
    textAlign: "right",
  },
  // Terms of payment
  total: {
    width: "40%",
  },
  twoItemTotal: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 3,
    marginBottom: 4,
  },
  styleTextTotal: {
    fontSize: 8,
    color: "#163269",
  },
  background: {
    backgroundColor: "#f0f5f5",
  },
  // Signateur
  twoItemSign: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 10,
  },
  signSquare: {
    borderWidth: 1,
    borderColor: "#000000",
    height: 80,
    width: "100%",
  },
  ligneSign: {
    borderBottom: 1,
    borderColor: "#000000",
    height: 30,
  },
  textSIgn: {
    fontSize: 8,
    fontWeight: "semibold",
    textAlign: "center",
    padding: 5,
  },
  // Page Number
  pageNumber: {
    fontSize: 8,
    textAlign: "center",
    margin: 10,
    justifyContent: "flex-end",
  },
  totalPages: {
    fontSize: 8,
    bottom: 30,
    right: 30,
  },
  sectionMontant: {
    width: "100%",
    height:"15%",
    display: "flex",
    flexDirection: "row",
    gap: 2,

  },
  section1_montants: {
    width: "75%",
    height:"100%",
    display: "flex",
    
    
  },
  
  View_Tva: {
    width: "100%",
    height:"40%",
    marginBottom:2,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
     borderBottomRightRadius: 10 
  },
  
  RowsTva: {
    width: "100%",
    height:"50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 8,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderBottomWidth: 0,

    
  },

  ItemTva: {
    width: "20%",
    height:"100%",
    fontWeight:"extrabold",
    fontSize:8,
    textAlign:"center",
    padding:3,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderBottomWidth: 0,
    backgroundColor:"rgb(193 203 221 / 50%)",
  },
  value_ItemTva: {
    width: "20%",
    height:"100%",
    padding:3,
    textAlign:"right",
    fontSize:9,
    fontWeight:"extrabold",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderBottomWidth: 0,

  },
  viewRemarque: {
    width:"100%",
    height:"40%",
    display:"flex",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopLeftRadius: 10,
     borderTopRightRadius: 10 
  },
  headerRemarque:{
    width:"100%",
    height:"30%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderTopLeftRadius: 10,
     borderTopRightRadius: 10 ,
     backgroundColor:"rgb(193 203 221 / 50%)"
   
  },
  
  remarque :{
    width:"80%",
    height:"100%",
    textAlign:"left",
    paddingLeft:4,
  },
  Point :{
    width:"20%",
    height:"100%",
    textAlign:"left",
    paddingLeft:3,
  
  },
  ItemRemarque :{
    width:"100%",
    height:"75%",
  },

  ItemR1:{
    width:"80%",
    height:"100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderBottomWidth: 0,
  },
  ItemR2:{
    width:"20%",
    height:"100%",
  },
  note:{
    width:"100%",
    height:"25%",
   padding:3,
   fontSize:7,
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10 
  },

  section2_montants: {
    width: "25%",
    height:"100%",
    display:"flex",
    flexDirection:"row",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    backgroundColor: "",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10 
  },

  totals_titles:{
    width:"50%",
    height:"100%",
    display:"flex",
    justifyContent:"space-between",
    // alignItems:"center",
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderBottomWidth: 0,
    
  },
  item_total :{
      paddingTop:5,
      paddingLeft:3,
      textAlign:"left",
      height:"20%",
      fontSize:8,
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth:0,
      borderLeftWidth:0,
      borderBottomWidth: 0,
     backgroundColor:"rgb(193 203 221 / 50%)"
  },
  item_value :{
      paddingTop:5,
      paddingRight:3,
      textAlign:"right",
      height:"20%",
      fontSize:10,
      fontWeight:"extrabold",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth:0,
      borderLeftWidth:0,
      borderBottomWidth: 0,
  },
 
  

});
