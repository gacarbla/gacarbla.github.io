
  // Nos authenticamos usando el personal token que hemos creado 
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // leemos el contenido del json los tomamos los datos
  let {data} = await octokit.repos.getContent({
    owner: 'sotoplatero',
    repo: 'db',
    path: 'todos.json',
  });

  // Decodificamos a string
  let todos = Buffer.from(data.content, 'base64').toString('utf8') ;