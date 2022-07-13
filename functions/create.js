
  // leemos los datos del body de la llamada POST
  let todo = JSON.parse( event.body )

  // le adjuntamos un ID
  todo = {
    id: uuidv4(),
    ...todo,
  };

  // Nos authenticamos usando el personal token que hemos creado 
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  // Leemos el json que contiene el listado de todos
  let {data} = await octokit.repos.getContent({
    owner: 'gacarbla',
    repo: 'db',
    path: 'todos.json',
  });

  // decodificamos y le agregamos el nuevo todo
  let todos = Buffer.from(data.content, 'base64').toString('utf8') 
  todos = [ ...JSON.parse(todos), todo ];

  // volvemos a codificar
  var fileContent = Buffer.from( JSON.stringify( todos ), 'utf8' ).toString('base64') 

  // actualizamos el fichero en el repo. Esto es un commit
  await octokit.repos.createOrUpdateFileContents({
      owner: 'gacarbla',
      repo: 'db',
      path: 'todos.json',
      message: '+',
      sha: data.sha,
      content: fileContent,
    });