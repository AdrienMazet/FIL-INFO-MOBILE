import 'package:convertisseur_devises/pages/convertisseur_page.dart';
import 'package:flutter/material.dart';

void main() => runApp(const MonApplication());

class MonApplication extends StatelessWidget {
  const MonApplication({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
            appBar: AppBar(
              title: const Text('Convertisseur de devises'),
            ),
            body: Container(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: const ConvertisseurDevisePage(),
            )));
  }
}
