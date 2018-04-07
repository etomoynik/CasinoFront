// App styles
{
    test: /\.css$/,
    include: [
        path.join(__dirname, 'src'),
        path.join(__dirname, 'node_modules/react-toolbox'),
      ],
    use: [
    {
        loader: 'css-loader',
        options: {
            modules: true,
        }
    }
},
{
    test: /\.css$/,
    include: [path.join(__dirname, 'node_modules')],
    exclude: [path.join(__dirname, 'node_modules/react-toolbox')],
    use: [
      ...,
      {
        loader: 'css-loader',
        options: {
          modules: false,
          ...
        },
      },
      ...
    ],
  },