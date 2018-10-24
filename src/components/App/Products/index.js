import { connect } from 'react-redux'
import ProductList from './view'
import { addProduct } from '../../../actions/products'

const mapStateToProps = state => ({
  products: state.products.list
})

const mapDispatchToProps = dispatch => ({
  addProduct: item => { dispatch(addProduct(item)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList)
