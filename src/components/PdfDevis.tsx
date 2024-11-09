import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  pdf,
} from "@react-pdf/renderer";
import logo from "../assets/fav.png";
import donnees from "../Data/Data";
import { styles } from "../styles";

// Register Roboto font
Font.register({
  family: "Roboto",
  fonts: [
    { src: "https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxP.ttf" }, // Regular
    {
      src: "https://fonts.gstatic.com/s/roboto/v29/KFOkCnqEu92Fr1Mu51xIIzc.ttf",
      fontWeight: "bold",
    }, // Bold
  ],
});
// Apply the Roboto font to the styles
const customStyles = StyleSheet.create({
  ...styles,
  textRoboto: {
    fontFamily: "Roboto",
  },
});

const Header = () => (
  <View style={styles.header} fixed>
    <View style={styles.view_logo}>
      {logo && <Image src={logo} style={styles.logo} />}
    </View>
    <View style={styles.header_sections}>
      <View style={styles.Hsection1}>
        <View style={styles.title}>
          <Text style={styles.textRoboto}>Facture</Text>
        </View>
        <View style={styles.infoG_1}>
          <View style={styles.Infositems_1}>
            <Text style={styles.textRoboto}>24/FA00419</Text>
          </View>
          <View style={styles.Infositems_1}>
            <Text style={styles.textRoboto}>05/11/2024</Text>
          </View>
          <View style={[styles.Infositems_1, { borderRightWidth: 0 }]}>
            <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
          </View>
        </View>
        <View style={styles.infoHeader}>
          <View style={styles.Infositems_2}>
            <Text style={styles.textRoboto}>Mode de paiment</Text>
          </View>
          <View style={styles.Infositems_2}>
            <Text style={styles.textRoboto}>Livré par</Text>
          </View>
          <View style={[styles.Infositems_2, { borderRightWidth: 0 }]}>
            <Text style={styles.textRoboto}>Effectué par</Text>
          </View>
        </View>
        <View style={styles.infoG_2}>
          <View style={styles.Infositems_1}>
            <Text style={styles.textRoboto}>ESPACE</Text>
          </View>
          <View style={styles.Infositems_1}>
            <Text style={styles.textRoboto}>LUI MEME</Text>
          </View>
          <View style={[styles.Infositems_1, { borderRightWidth: 0 }]}>
            <Text style={styles.textRoboto}>Kamar</Text>
          </View>
        </View>
      </View>
      <View style={styles.Hsection2}>
        <View style={styles.view_ICE}>
          <Text style={styles.textRoboto}>ICE :</Text>
          <Text style={styles.textRoboto}> 001810671000077</Text>
        </View>
        <View style={styles.client}>
          <Text style={[styles.textRoboto, { textTransform: "uppercase" }]}>
            integral progress technology
          </Text>
        </View>
      </View>
    </View>
  </View>
);

const TableHeader = () => (
  <View style={styles.tableRow} fixed>
    <Text style={[styles.tableHeader, { width: "20%", }]}>Référence</Text>
    <Text style={[styles.tableHeader, { width: "20%" }]}>Désignation</Text>
    <Text style={[styles.tableHeader, { width: "10%" }]}>Quantité Commandée</Text>
    <Text style={[styles.tableHeader, { width: "10%" }]}>Quantité Livrée</Text>
    <Text style={[styles.tableHeader, { width: "10%" }]}>P.U.V</Text>
    <Text style={[styles.tableHeader, { width: "10%" }]}>Remise(%)</Text>
    <Text style={[styles.tableHeader, { width: "10%" }]}>TVA(%)</Text>
    <Text style={[styles.tableHeader, styles.lastTableCol, { width: "10%", borderRightWidth:0  }]}>Total</Text>
  </View>
);

// Create PDF document component
const MyDocument = () => (
 
  <Document >
    <Page size="A4" style={customStyles.page} wrap>
      {<Header/>}

      {/* Table Section */}
      {/* Table Section */}
<View style={customStyles.table} wrap>
  <TableHeader />
  {donnees.map((item: any, index: number) => (
    <View
      key={index}
      style={[
        customStyles.tableRow,
        customStyles.tableRowCell,
        index === donnees.length - 1 ? customStyles.lastTableRow : {},
      ]}
      wrap
    >
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          { width: "20%" },
        ]}
      >
        {item.Désignation}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "20%" },
        ]}
      >
        {item.Long || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "10%" },
        ]}
      >
        {item.Larg || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "10%" },
        ]}
      >
        {item.Ep || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "10%" },
        ]}
      >
        {item.Pce || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "10%" },
        ]}
      >
        {item.Métrage || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { width: "10%" },
        ]}
      >
        {item.PU || "--"}
      </Text>
      <Text
        style={[
          customStyles.tableCell,
          customStyles.textRoboto,
          customStyles.textRight,
          { borderRight: 0, width: "10%" },
        ]}
      >
        {item["HT Total"] || "--"}
      </Text>
    </View>
  ))}
</View>

      {/* tva  */}
      <View style={styles.sectionMontant}>
        <View style={styles.section1_montants}>
          <View style={styles.View_Tva}>
            <View style={styles.RowsTva}>
              <Text  style={styles.ItemTva }>Base Ht</Text>
              <Text style={styles.ItemTva }>Montnant TVA (20%)</Text>
              <Text style={styles.ItemTva }>Montnant TVA (20%)</Text>
              <Text style={styles.ItemTva }>Montnant TVA (20%)</Text>
              <Text style={[styles.ItemTva ,{borderRightWidth:0}]}>Montnant TVA (20%)</Text>
            </View>
            <View style={styles.RowsTva}>
              <Text  style={styles.value_ItemTva }>54.17</Text>
              <Text style={styles.value_ItemTva }>10.83</Text>
              <Text style={styles.value_ItemTva }>0,00</Text>
              <Text style={styles.value_ItemTva }>0.00</Text>
              <Text style={[styles.value_ItemTva ,{borderRightWidth:0}]}>0.00</Text>
            </View>
          </View>
          <View style={styles.viewRemarque}>
              <View style={styles.headerRemarque}>
                <Text style={styles.remarque}>Remarque</Text>
                <Text style={styles.Point}>Pointé par</Text>
              </View>
              <View style={styles.ItemRemarque}>
                <Text style={[styles.ItemR1]}></Text>
                <Text ></Text>
              </View>
          </View>
          <View style={styles.note}>
            <Text style={{width:"45%"}}>Arrete la presente facture a la somme de <Text style={{textTransform:"uppercase"}}>Soixante Cinq dhs</Text></Text>
          </View>
        </View>
        <View style={styles.section2_montants}>
            <View style={[styles.totals_titles]}>
              <Text style={[styles.item_total,{borderTopWidth: 0}]}>TOTAL HT</Text>
              <Text style={[styles.item_total,{borderTopWidth: 0}]}>TOTAL TVA</Text>
              <Text style={styles.item_total}>TOTAL TTC</Text>
              <Text style={styles.item_total}>ACOMPTE</Text>
              <Text style={[styles.item_total,{borderBottomLeftRadius: 10}]}>NET A PAYER</Text>
            </View>
            <View style={[styles.totals_titles,{borderRightWidth:0}]}>
              <Text style={[styles.item_value,{borderTopWidth: 0}]}>54,17</Text>
              <Text style={[styles.item_value,{borderTopWidth: 0}]}>10,83</Text>
              <Text style={styles.item_value}>65,00</Text>
              <Text style={styles.item_value}>0,00</Text>
              <Text style={[styles.item_value,{backgroundColor:"rgb(193 203 221 / 50%)",fontSize:12,borderBottomRightRadius: 10}]}>65,00</Text>
            </View>
        </View>
       
      </View>
       {/* Footer */}
       <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} />
    </Page>
  </Document>
);

export default MyDocument;
