## Atom.InputRange
Este elemento es una mejora del elemento nativo `<input type="range" />` el cual solo permite establecer un único valor dentro de un rango. En esta ocasión el átomo `InputRange` te permite obtener un rango de valores concentrado en un rango superior.

### Attributes
```
id      : [OPTIONAL]
range   : [OPTIONAL] Object {min, max} (default: {0, 0})
value   : [OPTIONAL] Object {min, max} (default: {0, 0})
decimals: [OPTIONAL] Number (default: 0)
unit    : [OPTIONAL] String
```

### Methods
#### .value()
Este método sirve para establecer o recoger los valores del rango. Al ser un átomo que extiende de `Atom.Input` podrás incluirlo en cualquier `Molecule.Form`.

**Parameters**

```
value   : [OPTIONAL] Object {min, max}
```
**Example**

```
range_instance.value({min: 10.25, max:  50.95});
```

#### .clean()
Este método sirve para resetear la instancia actual.
**Example**

```
range_instance.clean();
```

### Events

#### onGMapChange
Este método se desplegará cuando el método `change` devuelva resultados.
