import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Forms = ({url}) => {

  const [form, setForm] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setForm(res.data));
  }, []);
  
    return (
        <div>
            <img src={form.sprites?.front_default} alt="" />
        </div>
    );
};

export default Forms;