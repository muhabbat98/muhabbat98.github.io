import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Homepage from '../../pages/homepage';
import Goods from '../../pages/goods';
import GoodsItem from '../../pages/goods-item';
import Category from '../../pages/category';
import Sellers from '../../pages/sellers';
import Buyers from '../../pages/buyers';
import BuyersInformation from '../../pages/buyers/buyers-information';
import Moderator from '../../../admin/pages/moderator';
import References from '../../pages/references';
import { ContentContainer } from './style';

const Content = () => {
  const { path } = useRouteMatch();

  return (
    <ContentContainer>
      <Switch>
        <Route exact path={path} component={Homepage} />
        <Route
          exact
          path={[`${path}/category`, `${path}/category/:id`]}
          component={Category}
        />
        <Route exact path={`${path}/goods`} component={Goods} />
        <Route exact path={`${path}/references`} component={References} />
        <Route exact path={`${path}/goods-item`} component={GoodsItem} />
        <Route exact path={`${path}/moderators`} component={Moderator} />
        <Route exact path={`${path}/buyers`} component={Buyers} />

        <Route path={`${path}/sellers`} component={Sellers} />

        {/* <Route exact path={`${path}/sellers`} component={Sellers} /> */}
        {/* <Route exact path={`${path}/sellers/:id`} component={AboutSeller} /> */}
        <Route
          exact
          path={`${path}/buyers/:id`}
          component={BuyersInformation}
        />
      </Switch>
    </ContentContainer>
  );
};

export default Content;
