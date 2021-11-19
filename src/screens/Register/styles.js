import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  btnBack: {
    marginLeft: 16,
    marginTop: 16,
  },
  btnBackImage: {
    width: 30,
    height: 30,
  },
  title: {
    color: "#313131",
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 30,
  },
  subtitle: {
    color: "#313131",
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 16,
    marginTop: 16,
  },
  input: {
    width: '90%',
    backgroundColor: "#FFF",
    borderRadius: 5,
    borderColor: "#C4C4C4",
    borderWidth:1,
    paddingLeft: 20,
    marginLeft: '5%',
    marginTop: 16,
    fontSize:18,
    height: 64,
  },
  btnRegister: {
    backgroundColor: '#7752CA',
    width: '90%',
    height: 64,
    marginLeft: '5%',
    borderRadius: 5,
    alignItems:'center',
    justifyContent:'center',
    position: 'absolute',
    bottom: 32,
  },
  textBtn: {
    color: "#FFF",
    fontWeight: 'bold',
    fontSize: 18
  }
})