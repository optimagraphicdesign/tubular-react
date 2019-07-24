import * as React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import { DataGrid, LocalStorage } from '../../src';
import columns from './data/columns';
import localData from './data/localData';

const LocalDataGrid: React.FunctionComponent = () => {
  const [getErrorMessage, setErrorMessage] = React.useState(null as string);

  return (
    <div className='root'>
      {getErrorMessage && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          style={{ paddingTop: '10px' }}
          open={true}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id='message-id'>{getErrorMessage}</span>}
        />
      )}
      <DataGrid
        columns={columns}
        dataSource={localData}
        gridName='LocalDataGrid'
        storage={new LocalStorage()}
        onError={setErrorMessage}
      />
    </div>
  );
};

export default LocalDataGrid;
