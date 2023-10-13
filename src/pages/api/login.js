import { withIronSessionApiRoute } from 'iron-session/next';

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    console.log(req.body);
    const response = await fetch('http://localhost:5000/api/v1/user', {
      method: 'POST',
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/JSON ',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    console.log(result);
    if (result.status === 'success') {
      req.session.user = {
        username: req.username,
        admin: true,
      };
      await req.session.save();
      res.send({ ok: true });
    } else {
      res.send({ ok: false });
    }
  },
  {
    cookieName: 'portfolio',
    password: '9NQrN2t0PVyZBoQbpiq27Z6N4VN5Ka2e',
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === 'production',
    },
  }
);
