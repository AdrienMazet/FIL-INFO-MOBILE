import 'package:flutter/material.dart';
import '../styles.dart';

class SaisieNombre extends StatelessWidget {
  final onChange;

  const SaisieNombre(this.onChange);

  @override
  Widget build(BuildContext context) {
    return TextField(
      style: AppStyle.inputStyle,
      onChanged: (newValue) => {onChange(newValue)},
    );
  }
}
