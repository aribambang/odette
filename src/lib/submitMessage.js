const submitMessage = async (event, setLoading, setMessage, setToaster) => {
  event.preventDefault();
  setLoading(true);
  const data = new FormData(event.target);
  const name = data.get('name');
  const location = data.get('location') || '';
  const who = data.get('who') || '';
  const message = data.get('message');
  const date = new Date().toLocaleString();
  const value = [date, name, location, who, message];

  try {
    const res = await fetch('/api/spreadsheets', {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify({ value }),
    });

    if (res.status === 200) {
      document.getElementById('formMessage').reset();
      setMessage((prevState) => [
        { name, location, who, message },
        ...prevState,
      ]);
      setToaster({ isError: false });
    } else {
      setToaster({ isError: true });
    }
  } catch (err) {
    setToaster({ isError: true });
  }

  setLoading(false);
};

export default submitMessage;
