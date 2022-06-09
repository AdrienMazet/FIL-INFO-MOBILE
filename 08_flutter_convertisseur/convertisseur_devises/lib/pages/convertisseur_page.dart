import 'package:flutter/material.dart';
import '../models/devise.dart';
import '../styles.dart';
import '../widgets/liste_devises.dart';
import '../widgets/saisie_nombre.dart';

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
        SaisieNombre(
          (newValue) => {
            setState(() {
              _valeur = double.parse(newValue);
            })
          },
        ),
        const Spacer(),
        const Text(
          'De',
          style: AppStyle.labelStyle,
        ),
        const Spacer(),
        ListeDevises(
            (Devise? newValue) => {
                  setState(() {
                    if (newValue != null) {
                      _deviseInitial = newValue;
                    }
                  })
                },
            _deviseInitial),
        const Spacer(),
        const Text('Vers', style: AppStyle.labelStyle),
        const Spacer(),
        ListeDevises(
            (Devise? newValue) => {
                  setState(() {
                    if (newValue != null) {
                      _deviseFinale = newValue;
                    }
                  })
                },
            _deviseFinale),
        const Spacer(
          flex: 2,
        ),
        ElevatedButton(
            onPressed: () => {
                  setState(() {
                    double? tauxInitial = taux[_deviseInitial];
                    double? tauxFinal = taux[_deviseFinale];
                    if (tauxInitial != null && tauxFinal != null) {
                      _resultat = (_valeur / tauxInitial) * tauxFinal;
                    }
                  })
                },
            child: const Text('Convertir')),
        const Spacer(
          flex: 2,
        ),
        Text(_resultat.toString(), style: AppStyle.labelStyle),
        const Spacer(),
      ],
    ));
  }
}
