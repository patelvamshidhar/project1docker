const express  = required('express');
const bodyParser  = required('body-parser');

const app = express();

let usergoal = 'Learn Docker!';

app.use(
    bodyParser,urlencoded({
        extended:  false,
    })
);

app.use(express.static('public'));

app.get('/',(req, res)  => {
    res.send(`
    <hmtl>
    <head>
        <link rel="stylesheet" href=sytel.css">
    </head>
        <body>
            <section>
                <h2>Patelvamshidhar.docker</h2>
                <h3>${usergoal}</h3>
            </section>
              <form action="/store-goal" method="POST">
                <div class="form-control">
                    <label>Couser goal</label>
                    <input type="text" name="goal">
                </div>
                <button>set couser goal</button>
              </form>
            </section>
        </body>
    </hmtl>
    `);
});

app.post('/store-goal', (req, re) =>{
    const enteredgoal = req.body.goal;
    console.log(entertedgoal);
    usergoal = enteredgoal;
    res.redirect('/');
});

app.listen(80);
