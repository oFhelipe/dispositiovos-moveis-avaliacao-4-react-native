import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFF'
  },
  empty: {
    alignSelf:'center',
    color: "#313131",
    fontSize: 20,
    textAlign:'center',
    marginTop: 32,
  },
  title: {
    color: "#313131",
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 16,
  },
  list: {
    flex: 1,
  },
  item: {
    width: "100%",
    height: 80,
    flexDirection: "column",
  },
  infos: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "15%"
  },
  infoText: {
    color: "#313131",
    fontSize: 16,
  },
  separator: {
    width: "80%",
    alignSelf: "flex-end",
    height: 2,
    backgroundColor: "#C9C9C9",
  },
  newContact: {
    height: 72,
    width: 72,
    backgroundColor: '#7752CA',
    borderRadius: 36
  },
  newContactButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  plusX:{
    height: 32,
    width: 4,
    backgroundColor:'#FFF',
    position: 'absolute',
    top: 20,
    left: 34,
  },
  plusY:{
    width: 32,
    height: 4,
    backgroundColor:'#FFF',
    position: 'absolute',
    left: 20,
    top: 34,
  }
});
