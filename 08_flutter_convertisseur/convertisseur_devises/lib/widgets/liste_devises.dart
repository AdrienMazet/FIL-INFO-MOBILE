import 'package:flutter/material.dart';
import '../models/devise.dart';

class ListeDevises extends StatelessWidget {
  final onChange;
  final selectedValue;

  // ignore: use_key_in_widget_constructors
  const ListeDevises(this.onChange, this.selectedValue);

  @override
  Widget build(BuildContext context) {
    return DropdownButton<Devise>(
        isExpanded: true,
        value: selectedValue,
        onChanged: (Devise? newDevise) => {onChange(newDevise)},
        items: const [
          DropdownMenuItem<Devise>(value: Devise.EURO, child: Text('Euro')),
          DropdownMenuItem<Devise>(value: Devise.DOLLAR, child: Text('Dollar')),
          DropdownMenuItem<Devise>(
              value: Devise.LIVRE_STERLING, child: Text('Livre Sterling')),
        ]);
  }
}
