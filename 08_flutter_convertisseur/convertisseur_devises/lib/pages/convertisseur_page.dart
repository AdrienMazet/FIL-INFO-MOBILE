import 'package:flutter/material.dart';

import '../models/devise.dart';
import '../styles.dart';

class ConvertisseurDevisePage extends StatefulWidget {
  // ignore: use_key_in_widget_constructors
  const ConvertisseurDevisePage();
  @override
  State<StatefulWidget> createState() {
    return _ConvertisseurDevisePage();
  }
}

class _ConvertisseurDevisePage extends State<ConvertisseurDevisePage> {
  // les différents "états" de la page

  late double _valeur; // valeur saisie
  late Devise _deviseInitial; // devise initiale sélectionnée
  late Devise _deviseFinale; // devise finale sélectionnée
  late double _resultat; // le résultat de la conversion

  // définition des valeurs initiales
  @override
  void initState() {
    super.initState();
    _valeur = 0;
    _resultat = 0;
    _deviseInitial = Devise.EURO;
    _deviseFinale = Devise.DOLLAR;
  }

  @override
  Widget build(BuildContext context) {
    return Center(
        child: Column(
      children: [
        const Spacer(),
        const Text(
          'Valeur',
          style: AppStyle.labelStyle,
        ),
        const Spacer(),
        const TextField(
          style: AppStyle.inputStyle,
        ),
        const Spacer(),
        const Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        const Spacer(),
        DropdownButton(
            isExpanded: true,
            onChanged: (newVal) => true,
            items: const [
              DropdownMenuItem<Devise>(
                child: Text('Val 1'),
              ),
              DropdownMenuItem<Devise>(
                child: Text('Val 2'),
              ),
            ]),
        const Spacer(),
        const Text('Vers', style: AppStyle.labelStyle),
        const Spacer(),
        DropdownButton(
            isExpanded: true,
            onChanged: (newVal) => true,
            items: const [
              DropdownMenuItem<Devise>(
                child: Text('Val 1'),
              ),
              DropdownMenuItem<Devise>(
                child: Text('Val 2'),
              ),
            ]),
        const Spacer(
          flex: 2,
        ),
        ElevatedButton(onPressed: () => true, child: const Text('Convertir')),
        const Spacer(
          flex: 2,
        ),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        const Spacer(),
      ],
    ));
  }
}
