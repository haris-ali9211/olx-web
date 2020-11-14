/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


export default function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      style={{ width: 250 }}
      renderInput={(params) => <TextField {...params} label="Pakistan" variant="outlined" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Pakistan' },
    { title: 'Sindh' },
    { title: 'Lahore' },
    { title: 'Punjab' },
    { title: 'Islamabad' },
    { title: 'Khyber Pakhthunkhwa' },
    { title: 'Rawalpindi' },
    { title: 'Faisalabad' },
    { title: 'Hyderabad' },
    { title: 'Mirpur Khas' },
    { title: 'Karachi' },
    { title: 'Multan' },
    { title: 'Larkana' }

];