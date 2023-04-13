texto = 'supermercado superação hiperMERCADO Mercado sadsamercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')


# positive lookahead
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# Negative lookbehind
puts texto.scan(/(?<!super)mercado/i)

