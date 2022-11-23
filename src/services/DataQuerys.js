import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


class DataQuerys {
  _dataURL = 'http://localhost:4000'

  getData = (url) => {

    let req = new ApolloClient ({
      uri: url,
      cache: new InMemoryCache(),
    });

    let data = req
      .query({
        query: gql`
      query {
        category{
          name
          products {
            category,
            id,
            name,
            inStock,
            gallery,
            description,
            brand,
            prices {
              currency{
                label,
                symbol
              },
              amount
            }
          }
        }
        }
      `,
      });

    return data;
  };

  getProducts = async () => {
    const res = await this.getData(this._dataURL).then(res => res.data.category.products);
    return res
  };

};

export default DataQuerys;